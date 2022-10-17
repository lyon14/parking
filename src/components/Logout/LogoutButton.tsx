import React, { useState } from "react";
import { IonButton } from "@ionic/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../store/users/actions/logout";

export const LogoutButton: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const onLogout = async () => {
        try {
            await dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <IonButton onClick={() => onLogout()} color="primary" type="submit">Logout</IonButton>
    );
};