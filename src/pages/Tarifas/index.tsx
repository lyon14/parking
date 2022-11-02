import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonLabel, IonCard, IonList, IonItem, IonCol, IonInput } from "@ionic/react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import locacion, { initLocationState } from "../../store/locacion";
import { listLocation } from "../../store/locacion/actions/listLocation";
import { SelectListLocacion } from "../../store/locacion/selectors/SelectListLocation";

export const Tarifas: React.FC = () => {

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
                                            <IonInput debounce={500} onIonChange={(ev) => handleSearch(ev)} type="text" placeholder="Mall Plaza Oeste" color="tertiary" />
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
                                        {results?.map((locacion, index) => (
                                            <IonItem key={index}>
                                                <IonCol size="6">
                                                    <IonLabel>{locacion.title}</IonLabel>
                                                </IonCol>
                                                <IonCol size="6">
                                                    <IonList>
                                                        <IonLabel>cada 1 hora $ {locacion.tarifa}</IonLabel>
                                                        <IonLabel>$0 los primeros 30 minutos</IonLabel>
                                                    </IonList>
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