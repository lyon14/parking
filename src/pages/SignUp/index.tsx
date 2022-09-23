import { IonPage } from "@ionic/react";
import React from "react";
import { SignUpForm } from "../../components/SignUp/SignUpForm";


export const SignUp: React.FC = () => {
    return (
        <IonPage>
            <SignUpForm />
        </IonPage>
    );
};