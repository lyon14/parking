import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonCard, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonCol } from "@ionic/react";

export const CalcularPrecio: React.FC = () => {

    const minutos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
    const horas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    return (
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
                    <IonRow class="ion-justify-content-center ion-padding">
                        <IonCard style={{width:'50%'}}>
                            <IonGrid class="ion-margin">
                                <IonRow class="ion-justify-content-center ion-padding">
                                    <IonLabel style={{ fontSize: 25, color: '#000', fontWeight: 600 }}>Calcular Precio</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonCard style={{width:'100%'}}>
                                        <IonItem>
                                            <IonLabel position="floating">Seleccione Locacion:</IonLabel>
                                            <IonSelect placeholder="Locacion">
                                                <IonSelectOption value="1">Locacion 1</IonSelectOption>
                                                <IonSelectOption value="2">Locacion 2</IonSelectOption>
                                                <IonSelectOption value="3">Locacion 3</IonSelectOption>
                                            </IonSelect>
                                        </IonItem>
                                    </IonCard>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonCol size="6">
                                        <IonCard>
                                            <IonItem>
                                                <IonLabel position="floating">Hora:</IonLabel>
                                                <IonSelect placeholder="Hora">
                                                    {horas.map((hora, index) => (
                                                        <IonSelectOption key={index} value={hora}>{hora}</IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            </IonItem>
                                        </IonCard>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonCard>
                                            <IonItem>
                                                <IonLabel position="floating">Minutos:</IonLabel>
                                                <IonSelect placeholder="Minutos">
                                                    {minutos.map((minuto, index) => (
                                                        <IonSelectOption key={index} value={minuto}>{minuto}</IonSelectOption>
                                                    ))}
                                                </IonSelect>
                                            </IonItem>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonButton>Calcular</IonButton>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    </IonRow>
                </section>
            </IonContent>
        </IonPage>
    );
}