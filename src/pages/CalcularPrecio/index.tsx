import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";

export const CalcularPrecio: React.FC = () => {
    return(
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Calcular Precio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    
                </section>
            </IonContent>
        </IonPage>
    );
}