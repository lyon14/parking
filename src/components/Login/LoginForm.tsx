import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";

export const LoginForm: React.FC = () => {
    return (
        <IonContent>
            <IonGrid style={{height: "100%"}}>
                <IonRow style={{display:"flex", alignItems:"center", justifyContent:"center", height: "100%"}}>
                    <IonCol style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <IonCard style={{width:"500px"}}>
                            <IonCardHeader class="ion-text-center">
                                <IonCardTitle>Login</IonCardTitle>
                            </IonCardHeader>
                            <IonItem>
                                <IonLabel position="floating">Email:</IonLabel>
                                <IonInput
                                    type="email"
                                    placeholder="Email"
                                ></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating">Contraseña:</IonLabel>
                                <IonInput
                                    type="password"
                                    placeholder="password"
                                ></IonInput>
                            </IonItem>
                            <IonRow class="ion-justify-content-center ion-margin">
                                <IonButton color="primary">Ingresar</IonButton>
                            </IonRow>
                            <IonRow class="ion-justify-content-center ion-align-items-center">
                                <IonLabel>¿No tienes cuenta?</IonLabel>
                                <IonButton color="primary" href="/signUp" fill="clear">Registrate</IonButton>
                            </IonRow>
                        </IonCard>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>
    );
};