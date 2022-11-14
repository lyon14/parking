import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, IonIcon } from "@ionic/react";
import { qrCodeOutline } from "ionicons/icons";
import React from "react";

export const PayParking: React.FC = () => {
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Pagar Parking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonRow class="ion-justify-content-center ion-padding">
                        <IonCard>
                            <IonGrid class="ion-margin">
                                <IonRow class="ion-justify-content-center ion-padding">
                                    <IonLabel style={{fontSize:25, color:'#000', fontWeight:600}}>Pague su Parking:</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonCard>
                                        <IonItem>
                                            <IonLabel position="floating">Patente:</IonLabel>
                                            <IonInput></IonInput>
                                        </IonItem>
                                    </IonCard>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonLabel>ó</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonButton>
                                        <IonIcon style={{marginRight:5}} icon={qrCodeOutline} />
                                        <IonLabel>Pagar con codigo QR</IonLabel>
                                    </IonButton>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    </IonRow>
                    
                </section>
            </IonContent>
        </IonPage>
    )
}