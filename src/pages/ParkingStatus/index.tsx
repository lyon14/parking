import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonLabel, IonCard, IonList, IonItem, IonCol, IonInput } from "@ionic/react"

export const ParkingStatus: React.FC = () => {
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Estado de Estacionamientos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCard class="ion-padding" style={{ width: '100%' }}>
                                <IonRow class="ion-justify-content-center">
                                    <IonLabel color="tertiary" style={{ fontSize: 25, fontWeight: 600 }}>Estado de Estacionamientos</IonLabel>
                                </IonRow>
                                <IonRow>
                                    <IonCard style={{ borderRadius: 10, width: '100%' }}>
                                        <IonItem>
                                            <IonLabel position="floating">Locacion:</IonLabel>
                                            <IonInput type="text" placeholder="Mall Plaza Oeste" color="tertiary" />
                                        </IonItem>

                                    </IonCard>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonItem lines="none">
                                        <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-success-shade)', borderRadius: 50 }}></IonCard>
                                        <IonLabel>Trafico Bajo</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none">
                                        <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-warning)', borderRadius: 50 }}></IonCard>
                                        <IonLabel>Trafico Medio</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none">
                                        <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-danger)', borderRadius: 50 }}></IonCard>
                                        <IonLabel>Trafico Alto</IonLabel>
                                    </IonItem>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonList style={{ width: '100%' }}>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>Locacion:</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>Usados/Total</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>Estado:</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>Mall Plaza Oeste</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>523/2500</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-success-shade)', borderRadius: 50 }}></IonCard>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>Mall Plaza Vespucio</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>3000/3500</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-danger)', borderRadius: 50 }}></IonCard>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>Mall Plaza Las Condes</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>1233/3500</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonCard style={{ width: 15, height: 15, background: 'var(--ion-color-warning)', borderRadius: 50 }}></IonCard>
                                            </IonCol>
                                        </IonItem>
                                    </IonList>
                                </IonRow>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                </section>
            </IonContent >
        </IonPage >
    )
}