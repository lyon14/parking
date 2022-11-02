import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonLabel, IonCard, IonList, IonItem, IonCol, IonInput } from "@ionic/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { initLocationState } from "../../store/locacion";
import { listLocation } from "../../store/locacion/actions/listLocation";
import { SelectListLocacion } from "../../store/locacion/selectors/SelectListLocation";

export const ParkingStatus: React.FC = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(initLocationState())
        dispatch(listLocation());
        
    }, [dispatch]);

    const ListaLocaciones = useSelector(SelectListLocacion);

    const [results, setResults]= useState(ListaLocaciones);

    const handleSearch = (e: any) => {
        const query = e.target.value.toLowerCase();
        const filtered = ListaLocaciones?.filter((item: any) => {
            return item.title.toLowerCase().includes(query);
        });
        setResults(filtered);
    } 


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
                                            <IonInput debounce={500} onIonChange={(ev) => handleSearch(ev)} type="text" placeholder="Mall Plaza Oeste" color="tertiary" />
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
                                        {results?.map((locacion, index) => (
                                            <IonItem key={index}>
                                                <IonCol size="4">
                                                    <IonLabel>{locacion.title}</IonLabel>
                                                </IonCol>
                                                <IonCol size="4">
                                                    <IonLabel>{locacion.used}/{locacion.total}</IonLabel>
                                                </IonCol>
                                                <IonCol size="4">
                                                    <IonCard style={{ 
                                                        width: 15, 
                                                        height: 15, 
                                                        background: locacion.used < locacion.total * 0.3 ? 'var(--ion-color-success-shade)' : locacion.used < locacion.total * 0.7 ? 'var(--ion-color-warning)' : 'var(--ion-color-danger)', 
                                                        borderRadius: 50 
                                                        }}>
                                                    </IonCard>
                                                </IonCol>
                                            </IonItem>
                                        ))}
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