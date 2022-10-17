import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../store/users/actions/logout";

export const Menu: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const onLogout = async () => {
        try{
            await dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <IonMenu contentId="main-content" type="overlay">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList lines="none">
                        <IonItem>
                            <IonLabel>Item 1</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Item 1</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Item 1</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton onClick={() => onLogout()} color="danger" expand="full" type="submit" style={{paddingLeft:10, paddingRight:10}}>Logout</IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonMenu>
        </>
    );
};