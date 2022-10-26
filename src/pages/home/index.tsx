import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonLabel, IonRow, IonCard, IonList, IonItem, IonCol } from "@ionic/react"
import { useSelector } from "react-redux";
import { selectUser } from "../../store/users/selectors/SelectUser"

export const Home: React.FC = () => {

    const user = useSelector(selectUser);
    
    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonLabel style={{fontSize:25,fontWeight:600}}>Bienvenido {user?.name}</IonLabel>
                        </IonRow>
                        <IonRow>
                            <IonCard class="ion-padding" style={{width:'100%'}}>
                                <IonRow class="ion-justify-content-center">
                                    <IonLabel color="tertiary" style={{fontSize:25,fontWeight:600}}>Historial de Pagos:</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center">
                                    <IonList style={{width:'100%'}}>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>Fecha:</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>Patente:</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>Valor:</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>24/10/2022</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>22ttdo</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>$ 20.000</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>24/10/2022</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>22ttdo</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>$ 20.000</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>24/10/2022</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>22ttdo</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>$ 20.000</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>24/10/2022</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>22ttdo</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>$ 20.000</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        <IonItem>
                                            <IonCol size="4">
                                                <IonLabel>24/10/2022</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>22ttdo</IonLabel>
                                            </IonCol>
                                            <IonCol size="4">
                                                <IonLabel>$ 20.000</IonLabel>
                                            </IonCol>
                                        </IonItem>
                                        
                                    </IonList>
                                </IonRow>
                            </IonCard>
                        </IonRow>
                    </IonGrid>
                </section>
            </IonContent>
        </IonPage>
    )
}