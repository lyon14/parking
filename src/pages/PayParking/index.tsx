import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import React from "react";

export const PayParking: React.FC = () => {
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Pay Parking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                A pagar
            </IonContent>
        </IonPage>
    )
}