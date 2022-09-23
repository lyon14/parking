import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";

export const SignUpForm: React.FC = () => {
    return (
        <IonContent>
            <IonGrid style={{height: "100%"}}>
                <IonRow style={{display:"flex", alignItems:"center", justifyContent:"center", height: "100%"}}>
                    <IonCol style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <IonCard style={{width:"500px"}}>
                            <IonCardHeader class="ion-text-center">
                                <IonCardTitle>Registrate</IonCardTitle>
                            </IonCardHeader>
                            <IonItem>
                                <IonLabel position="floating">nombre:</IonLabel>
                                <IonInput
                                    type="text"
                                    placeholder="nombre"
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">telefono:</IonLabel>
                                <IonInput
                                    type="tel"
                                    placeholder="+56958441181"
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Email:</IonLabel>
                                <IonInput
                                    type="email"
                                    placeholder="Email@email.com"
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Repita Email:</IonLabel>
                                <IonInput
                                    type="email"
                                    placeholder="Email@email.com"
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Contraseña:</IonLabel>
                                <IonInput
                                    type="password"
                                    placeholder="Contraseña"
                                ></IonInput>
                            </IonItem>
                            <IonRow class="ion-justify-content-center ion-margin">
                                <IonButton color="primary">Registrarse</IonButton>
                            </IonRow>
                            <IonRow class="ion-justify-content-center ion-align-items-center">
                                <IonLabel>Ya tienes cuenta</IonLabel>
                                <IonButton color="primary" href="/login" fill="clear">Inicia Session</IonButton>
                            </IonRow>
                        </IonCard>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>
    );
};