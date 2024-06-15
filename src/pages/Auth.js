import React from "react";
import * as Components from '../components/AuthComponents';
import Cookies from 'js-cookie';
import firebaseLogin from "../utils/firebaseLogin";
import firebaseSignup from "../utils/firebaseSignUp";

function AuthPage() {
    const [signIn, toggle] = React.useState(true);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

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
        const UID = await firebaseSignup(formData.email, formData.password, formData.name);
        if (UID === undefined)
            return;
        
        const fakeToken = UID;
        Cookies.set('token', fakeToken, { expires: 1 });
        window.location.href = '/'; // Redirect to home page
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        // Simulate an API call to register a user and get a token
        const UID = await firebaseLogin(formData.email, formData.password);
        if (UID === undefined)
            return;
        
        const fakeToken = UID;
        Cookies.set('token', fakeToken, { expires: 1 }); // Store JWT in cookies for 1 day
        window.location.href = '/'; // Redirect to home page
    };

    return (
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
    );
}

export default AuthPage;
