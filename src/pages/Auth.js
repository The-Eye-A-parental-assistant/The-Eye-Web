import React from "react";
import * as Components from '../components/AuthComponents';
import Cookies from 'js-cookie';
import firebaseLogin from "../utils/firebaseLogin";
import firebaseSignup from "../utils/firebaseSignUp";

import "./authStyles.css";
import { Single_user_fetch } from "../utils/Single_user_fetch";
import { useEffect } from "react";



function AuthPage() {
    const [signIn, toggle] = React.useState(true);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        PIN: 1111
    });

    useEffect(() => {
        const UID = Cookies.get('token');
        if (UID) {
            if(Cookies.get('role') == 'creator')
                window.location.href = `/creator/${UID}`;
            else
                window.location.href = '/profiles';
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const UID = await firebaseSignup(formData.email, formData.password, formData.name, formData.role, formData.PIN);
        if (UID === undefined)
            return;
        
        Cookies.set('token', UID, { expires: 1 });
        Cookies.set('role', formData.role, { expires: 1 });

        if(formData.role == 'creator')
            window.location.href = `/creator/${UID}`;
        else
            window.location.href = '/profiles';
    };

    
    const handleSignIn = async (e) => {
        e.preventDefault();
        // Simulate an API call to register a user and get a token
        const UID = await firebaseLogin(formData.email, formData.password);
        if (UID === undefined)
            return;
        
        Single_user_fetch(UID, ()=>{}).then((data) => {
            Cookies.set('role', data.role, { expires: 1 });
            Cookies.set('token', UID, { expires: 1 }); // Store JWT in cookies for 1 day
            if(data.role == 'creator')
                window.location.href = `/creator/${UID}`;
            else
                window.location.href = '/profiles';
        });

    };

    return (
        <div className="body1">
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignUp}>
                    
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input 
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        />
                    <Components.Input 
                        type='email' 
                        placeholder='Email' 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        />
                    <Components.Input 
                        type='password' 
                        placeholder='Password' 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required 
                        />
                    <Components.Input 
                        type='password' 
                        placeholder='Confirm Password' 
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required 
                        />
                        {formData.role === "parent" && (
                       <Components.Input 
                       type='text' 
                       placeholder='Enter PIN' 
                       name='parentPin'
                       value={formData.parentPin}
                       onChange={handleChange}
                       maxLength="4"
                       pattern="\d{4}"
                       title="PIN must be 4 digits"
                       inputMode="numeric"
                       required 
                   />
                        )}
                        <Components.RadioContainer>

                        <Components.RadioLabel>
                            <Components.RadioInput 
                                type="radio" 
                                name="role" 
                                value="creator" 
                                checked={formData.role === "creator"} 
                                onChange={handleChange} 
                            />
                            <Components.RadioSpan>Creator</Components.RadioSpan>
                        </Components.RadioLabel>
                        <Components.RadioLabel>
                            <Components.RadioInput 
                                type="radio" 
                                name="role" 
                                value="parent" 
                                checked={formData.role === "parent"} 
                                onChange={handleChange} 
                            />
                            <Components.RadioSpan>Parent</Components.RadioSpan>
                        </Components.RadioLabel>
                        </Components.RadioContainer>

                        


                    <Components.Button type='submit'>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignIn}>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input 
                        type='email' 
                        placeholder='Email' 
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        />
                    <Components.Input 
                        type='password' 
                        placeholder='Password' 
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required 
                        />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type='submit'>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>

                        </div>

    );
}

export default AuthPage;
