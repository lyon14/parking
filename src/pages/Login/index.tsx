import { IonPage } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { LoginForm } from "../../components/Login/LoginForm";
import { selectIsAuthenticated } from "../../store/users/selectors/SelectIsAuthenticated";


export const Login: React.FC = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);

    console.log(isAuthenticated);

    if(isAuthenticated) {
        return <Redirect to="/app/home" />
    }

    return (
        <IonPage>
            <LoginForm />
        </IonPage>
    );
};