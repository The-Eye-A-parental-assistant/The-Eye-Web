import React, { useState } from 'react';
import styled from 'styled-components';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import defaultprofile from '../img/img9.jpg';
import { db } from '../utils/firebaseinit';
import { doc, collection, addDoc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import Cookies from 'js-cookie';
import uploadImage from '../utils/uploadImage';

const FormWrapper = styled.div`
    background-image: url("https://www.transparenttextures.com/patterns/robots.png");
    padding: 20px;
    `;
    const AddAccountFormContainer = styled.div`
    width: 900px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    text-align: center;
    align-items: center;
    
    margin-top: 12px;
    background-image: url("https://www.transparenttextures.com/patterns/robots.png");
    `;
    
    const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    `;
    
    const Heading = styled.h2`
    margin-top: 0;
    `;
    
    const ProfilePicture = styled.div`
    margin: 20px 0;
    paddig-left: 20px;
    padding-right: 20px;
    `;
    
    const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    `;

    const GenderSelection = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    `;
    
    const Label = styled.label`
    cursor: pointer;
    `;
    
    const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    `;
    
    const ContentSelection = styled.div`
    margin-top: 20px;
    `;
    
    const ContentButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    `;
    
    const ContentButton = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    
    &.selected {
        background-color: #4caf50;
        color: white;
        }
        `;
        
        const SelectButtons = styled.div`
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        `;
        
        const SelectButton = styled.button`
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 7px;
        border-color: #4caf50;
    `;
    
    const handleSubmit = async(prefs, gender, name, birthdate, PIN, imageURL) => {
        const placeholderImage = 'https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9';
        
        if (PIN.length !== 4  && isNaN(PIN)) {
            alert('PIN must be 4 numbers');
            return;
        }

        if (gender === '') {
            alert('Please choose gender');
            return;
        }

        let selectedPrefs = [];
        for (const [key, value] of Object.entries(prefs)) {
            if (value) {
                selectedPrefs.push(key.toLowerCase());
            }
        }

        const ParentUID = Cookies.get('token');
        const docData = {
            PIN: 1111,
            gender: gender,
            name: name,
            imageURL: placeholderImage,
            parentID: ParentUID,
            birthDate: Timestamp.fromDate(new Date(birthdate)),
            history: [],
            likes: [],
            dislikes: [],
            favourites: [],
            prefs: selectedPrefs,
            screenTime: {sun: 0, mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0}
        };
        const docRef = await addDoc(collection(db, "users"), docData);
        await updateDoc(doc(db, "users", ParentUID), {children: arrayUnion(docRef.id)});

        if (imageURL !== '') {
            // upload image to firebase storage and get link
            // imageURL = await uploadImage();

            // update doc with imageURL
            // await updateDoc(docRef, {imageURL: imageURL});   
        }

        window.location.href = '/profiles';
    };


   

    
    const AddAccountForm = () => {
        const [gender, setGender] = useState('');
        const [name, setName] = useState('');
        const [birthdate, setDate] = useState();
        const [PIN, setPIN] = useState('');
        const [imageURL, setImageURL] = useState('');
        const [allowedContent, setAllowedContent] = useState({
            Nudity: false,
            Violence: false,
            Weapons: false,
            LGBTQ: false,
            Disgusting: false,
            Sexual: false,
            Blood: false,
        });

    const handleContentChange = (content) => {
        setAllowedContent({
            ...allowedContent,
            [content]: !allowedContent[content],
        });
    };

    const handleSelectAll = () => {
        const allSelected = Object.fromEntries(Object.entries(allowedContent).map(([key]) => [key, true]));
        setAllowedContent(allSelected);
    };

    const handleDeselectAll = () => {
        const noneSelected = Object.fromEntries(Object.entries(allowedContent).map(([key]) => [key, false]));
        setAllowedContent(noneSelected);
    };

    return (
        <FormWrapper>   
        <AddAccountFormContainer>
            <Heading>Add Account</Heading>
            
            <ProfilePicture>
            <ProfileImage src={defaultprofile} />      
                <Input type="file" onChange={(e)=>setImageURL(e.target.value)} />
            </ProfilePicture>
            <GenderSelection>
                <Label>
                    <Input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                    Male
                </Label>
                <Label>
                    <Input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                    Female
                </Label>
            </GenderSelection>
            <div style={{paddingRight:'20px', margin:'0'}}>
                <Input type="text" placeholder="Child's Name" onChange={(e)=>setName(e.target.value)}/>
                <Input type="date" placeholder="Birth Date" onChange={(e)=>setDate(e.target.value)}/>
                <Input type="password" max={4} placeholder="PIN" title="PIN must be 4 numbers" onChange={(e)=>setPIN(e.target.value)} />
            </div>
           
            <ContentSelection>
                <h3>Select allowed content</h3>
                <ContentButtons>
                    {Object.keys(allowedContent).map((content) => (
                        <ContentButton
                        key={content}
                        className={allowedContent[content] ? 'selected' : ''}
                        onClick={() => handleContentChange(content)}
                        >
                            {content}
                        </ContentButton>
                    ))}
                </ContentButtons>
                <SelectButtons>
                    <SelectButton onClick={handleSelectAll}>Select All</SelectButton>
                    
                    <SelectButton onClick={() => handleSubmit(allowedContent, gender, name, birthdate, PIN, imageURL)}>
                        <CheckCircleRoundedIcon style={{ fontSize: 'small' }} />
                        Add Child
                    </SelectButton>

                    <SelectButton onClick={handleDeselectAll}>Deselect All</SelectButton>
                </SelectButtons>
            </ContentSelection>
            
        </AddAccountFormContainer>
        </FormWrapper>
    );
};

export default AddAccountForm;