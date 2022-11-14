import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonCard, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonCol, isPlatform } from "@ionic/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { initLocationState } from "../../store/locacion";
import { listLocation } from "../../store/locacion/actions/listLocation";
import { SelectListLocacion } from "../../store/locacion/selectors/SelectListLocation";

export const CalcularPrecio: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initLocationState())
        dispatch(listLocation());
    }, [dispatch]);

    const ListaLocaciones = useSelector(SelectListLocacion);

    const [results, setResults]= useState(ListaLocaciones);

    //calcular precio
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            locacion: '',
            tiempo: '',
        },
    });

    const onSubmit = async (data: any) => {
        const tiempo = data.tiempo.split(":");
        const hora = parseInt(tiempo[0]);
        const minuto = parseInt(tiempo[1]);
        const idLocacion = data.locacion;
        const tarifa = ListaLocaciones?.find((locacion) => locacion.id === idLocacion)?.tarifa;
        const total = Math.round((hora * tarifa) + (minuto * (tarifa / 60)));
        if(minuto > 30 && hora == 0){
            setPrecio(total);
        }else if (hora != 0){
            setPrecio(total);
        }else{
            setPrecio(0);
        }
        
    };

    const isDesktop = isPlatform('desktop');

    const styles = {
        sideCard: isDesktop ? { width: '50%' } : { width: '100%' },
    };

    const [precio, setPrecio] = useState(0);

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
                        <IonCard style={styles.sideCard}>
                            <IonGrid class="ion-margin">
                                <IonRow class="ion-justify-content-center ion-padding">
                                    <IonLabel style={{ fontSize: 25, color: '#000', fontWeight: 600 }}>Calcular Precio</IonLabel>
                                </IonRow>
                                <IonRow class="ion-justify-content-center ion-padding">
                                    <IonLabel style={{ fontSize: 25, color: '#000', fontWeight: 600 }}>Precio a pagar:$ {precio}</IonLabel>
                                </IonRow>
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <IonRow class="ion-justify-content-center">
                                        <IonCard style={{width:'100%'}}>
                                            <IonItem>
                                                <IonLabel position="floating">Seleccione Locacion:</IonLabel>
                                                <Controller
                                                    control={control}
                                                    name="locacion"
                                                    render={({ field: { onChange, value }}) => (
                                                        <IonSelect onIonChange={(e) => onChange(e.detail.value)} value={value} placeholder="Locacion">
                                                            {results?.map((locacion, index) => (
                                                                <IonSelectOption key={index} value={locacion.id} >{locacion.title}</IonSelectOption>
                                                            ))}
                                                        </IonSelect>
                                                    )}
                                                />

                                            </IonItem>
                                        </IonCard>
                                    </IonRow>
                                    <IonRow class="ion-justify-content-center">
                                        <IonCard style={{width:'100%'}}>
                                            <IonItem>
                                                <Controller
                                                    control={control}
                                                    name="tiempo"
                                                    render={({ field: { onChange, value } }) => (
                                                        <IonInput type="time" onIonChange={(e) => onChange(e.detail.value)} value={value}></IonInput>
                                                    )}
                                                />
                                            </IonItem>
                                        </IonCard>
                                    </IonRow>
                                    <IonRow class="ion-justify-content-center">
                                        <IonButton type="submit">Calcular</IonButton>
                                    </IonRow>
                                </form>
                            </IonGrid>
                        </IonCard>
                    </IonRow>
                </section>
            </IonContent>
        </IonPage>
    );
}