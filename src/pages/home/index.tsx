import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonLabel, IonRow, IonCard, IonList, IonItem, IonCol } from "@ionic/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { selectUser } from "../../store/users/selectors/SelectUser"
import { listVentaId } from "../../store/venta/actions/listVentaId";
import { initVentaState } from "../../store/venta";
import { SelectListVentaId } from "../../store/venta/selector/SelectListVentaId";

export const Home: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(selectUser);
    
    useEffect(() => {
        dispatch(initVentaState());
        dispatch(listVentaId(user?.id));
    }, [dispatch, user]);

    const ListaVentas = useSelector(SelectListVentaId);

    const [results, setResults]= useState(ListaVentas);

    
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
                                    <IonLabel color="tertiary" style={{fontSize:25,fontWeight:600}}>Historial de Pagos</IonLabel>
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
                                        {results?.map((locacion, index) => (
                                            <IonItem key={index}>
                                                <IonCol size="4">
                                                    <IonLabel>{(new Date()).toLocaleDateString('es-cl', locacion.createdAt)}</IonLabel>
                                                </IonCol>
                                                <IonCol size="4">
                                                    <IonLabel>{locacion.patente}</IonLabel>
                                                </IonCol>
                                                <IonCol size="4">
                                                    <IonLabel>$ {locacion.pago}</IonLabel>
                                                </IonCol>
                                            </IonItem>
                                        ))}
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