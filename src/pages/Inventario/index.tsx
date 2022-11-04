import React from "react"
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"

export const Inventario: React.FC = () => {
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Inventario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonGrid>
                        <IonRow class="ion-justify-content-center">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Here's a small text description for the card content. Nothing more, nothing less.
                                </IonCardContent>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                </section>
            </IonContent>
        </IonPage>
    )
}