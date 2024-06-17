import TextField from "@mui/material/TextField";
import { Stack, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Imagee from '../img/Render1.png';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #8ED197;
    margin: 0px;
    height: 100%;
    box-sizing: border-box;
    font-family: Arial, sans-serif;

    @media (max-width: 768px) {
        flex-direction: column;
    };
`;
//   align-items: flex-start;
//   justify-content: space-between;
//   height: 100vh;
//   background-color: #8ED197;
//   margin: 0px;
//   width: 100%;
//   box-sizing: border-box;
//   font-family: Arial, sans-serif;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

const FormContainer = styled.form`
  margin-top: 0vh;
  width: 50%;
  padding: 60px 40px 0px 10px;
  display: flex;
  flex-direction: column;
`;

const FormHeading = styled.h2`
  margin-bottom: 50px;
`;

const FormParagraph = styled.p`
  margin-bottom: 30px;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const FormInput = styled(TextField)`
  padding: 15px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
`;

const FormButton = styled(Button)`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 120px;
  margin-top: 20px;
  text-decoration: solid;
  font-weight: bolder;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContentContainer = styled.div`
  width: 50%;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  height: 90vh;
  margin-top: 2vh;
  border-radius: 10px 0px 0px 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Form() {
  return (
    <Container>
      <FormContainer>
        <FormHeading>Contact us</FormHeading>
        <FormParagraph>Fill in the form below, and we will get back to you as soon as possible!</FormParagraph>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput id="name" label="Name" variant="outlined" type="text" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput id="email" label="Email" variant="outlined" type="email" />
        <FormLabel htmlFor="contact-number">Contact number</FormLabel>
        <FormInput id="contact-number" label="Contact number" variant="outlined" type="tel" />
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <FormInput id="subject" label="Subject" variant="outlined" type="text"  />
        <FormLabel htmlFor="details">Details</FormLabel>
        <FormInput id="details" label="Details" variant="outlined" type="text"  />
        <FormButton variant="outlined" color="success" id="form-btn" style={{ borderColor: "white", color: "white" }}>Submit</FormButton>
        {/* <FormButton variant="outlined" color="success" id="form-btn">Submit</FormButton> */}
      </FormContainer>
      <ContentContainer>
        <img src={Imagee} alt="contact" style={{ width: "100%" }} />
      </ContentContainer>
    </Container>

  );
}

export default Form;