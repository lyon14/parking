import { IonList, IonItem, IonLabel, IonButton, IonRow } from "@ionic/react"
import { useDispatch, useSelector } from "react-redux";
import { datosPago } from "../../../@types/datosPago";
import { selectPatenteFind } from "../../../store/activo/selectors/SelectPatenteFind";
import { ActivoPagoRealizadoPatente } from "../../../store/activo/actions/ActivoPagoRealizadoPatente";
import { AppDispatch } from "../../../store";
import { selectStatusPagoRealizadoPatente } from "../../../store/activo/selectors/SelectStatusPagoRealizadoPatente";
import { Redirect } from "react-router";

export const PagarInfo: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const info = useSelector(selectPatenteFind);
    const infoActivo = info?.activo;
    const infoLocacion = info?.locacion;
    const ActivoId = infoActivo?.id;
    const ActivoPatente = infoActivo?.patente;

    const idLocacion = infoActivo?.id_locacion;
    const idUsuario = infoActivo?.id_usuario;
    
    const date = new Date(infoActivo.createdAt);
    const dateFecha = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    //diferencia en horas entre la hora de creacion y la hora actual
    const dateActual = new Date();
    const diferencia = dateActual.getTime() - date.getTime();
    const diferenciaHoras = Math.round(diferencia / (1000 * 60 * 60));
    const diferenciaMinutos = Math.round(diferencia / (1000 * 60));
    const minutos = diferenciaMinutos - (diferenciaHoras * 60);
    const horas = diferenciaHoras;
    const tarifa = infoLocacion.tarifa;
    const total = Math.round((horas * tarifa) + (minutos * (tarifa / 60)));

    const datosPago: datosPago =
        {
            id_activo: ActivoId,
            pago: total,
            patente: ActivoPatente,
            id_usuario: idUsuario,
            id_locacion: idLocacion,
        };
    
    
    function Pagar() {
        return datosPago;
    }

    const onSubmit = async () => {
        try {
            const pago = Pagar();
            console.log(pago);
            dispatch(ActivoPagoRealizadoPatente(pago));
        } catch (error) {
            console.log(error);
        }
    };

    const status = useSelector(selectStatusPagoRealizadoPatente);

    if( status === "fulfilled"){
        return <Redirect to="/app/home" />
    }

    return (
        <>
            <IonRow class="ion-justify-content-center ion-padding">
                <IonLabel style={{ fontSize: 25, fontWeight: 600 }} color="tertiary">Detalles de Pago</IonLabel>
            </IonRow><IonRow class="ion-justify-content-center">
                <IonList>
                    <IonItem>
                        <IonLabel style={{ fontSize: 18, color: '#000', fontWeight: 600 }}>Pagar: ${total}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ fontSize: 18, color: '#000', fontWeight: 600 }}>Patente: {infoActivo.patente}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ fontSize: 18, color: '#000', fontWeight: 600 }}>Fecha: {dateFecha}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ fontSize: 18, color: '#000', fontWeight: 600 }}>Tiempo: {horas}:{minutos}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel style={{ fontSize: 18, color: '#000', fontWeight: 600 }}>Locacion: {infoLocacion.title}</IonLabel>
                    </IonItem>
                </IonList>
            </IonRow><IonRow class="ion-justify-content-center">
                <IonButton onClick={() => onSubmit()} expand="block" style={{ marginTop: 10 }}>Pagar</IonButton>
            </IonRow>
        </>
    )
}