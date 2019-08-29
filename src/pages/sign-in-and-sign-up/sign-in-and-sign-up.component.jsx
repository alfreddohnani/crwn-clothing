import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import SignIn from "../../components/sign-in/sign-in.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;