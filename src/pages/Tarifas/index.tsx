import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonLabel, IonCard, IonList, IonItem, IonCol, IonInput } from "@ionic/react"

export const Tarifas: React.FC = () => {
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Tarifas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCard class="ion-padding" style={{ width: '100%' }}>
                                <IonRow class="ion-justify-content-center">
                                    <IonLabel color="tertiary" style={{ fontSize: 25, fontWeight: 600 }}>Tarifas de Estacionamientos</IonLabel>
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
                                    <IonList style={{ width: '100%' }}>
                                        <IonItem>
                                            <IonCol size="6">
                                                <IonLabel>Locacion:</IonLabel>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonLabel>Tarifa:</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="6">
                                                <IonLabel>Mall Plaza Vespucio</IonLabel>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonList>
                                                    <IonLabel>cada 1 hora $2000</IonLabel>
                                                    <IonLabel>$0 los primeros 30 minutos</IonLabel>
                                                </IonList>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="6">
                                                <IonLabel>Mall Plaza Vespucio</IonLabel>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonList>
                                                    <IonLabel>cada 1 hora $2000</IonLabel>
                                                    <IonLabel>$0 los primeros 30 minutos</IonLabel>
                                                </IonList>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="6">
                                                <IonLabel>Mall Plaza Vespucio</IonLabel>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonList>
                                                    <IonLabel>cada 1 hora $2000</IonLabel>
                                                    <IonLabel>$0 los primeros 30 minutos</IonLabel>
                                                </IonList>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="6">
                                                <IonLabel>Mall Plaza Vespucio</IonLabel>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonList>
                                                    <IonLabel>cada 1 hora $2000</IonLabel>
                                                    <IonLabel>$0 los primeros 30 minutos</IonLabel>
                                                </IonList>
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