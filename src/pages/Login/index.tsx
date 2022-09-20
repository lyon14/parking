import { IonPage } from "@ionic/react";
import React from "react";
import { LoginForm } from "../../components/Login/LoginForm";


export const Login: React.FC = () => {
    console.log("Login Render");
    return (
        <IonPage>
            <LoginForm />
        </IonPage>
    );
};