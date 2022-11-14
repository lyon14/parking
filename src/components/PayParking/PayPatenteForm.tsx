import { IonRow, IonCard, IonItem, IonLabel, IonInput, IonCol, IonButton } from "@ionic/react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { InputErrorMessage } from "../errors/InputErrorMessage"
import { ActivoFindPatente } from "../../store/activo/actions/ActivoFindPatente";
import { useEffect } from "react";
import { initActivoState } from "../../store/activo";

export const PayPatenteForm: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            patente: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            dispatch(ActivoFindPatente(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <IonRow class="ion-justify-content-center">
                <IonCard>
                    <IonItem>
                        <IonLabel position="floating">Patente:</IonLabel>
                        <Controller
                            control={control}
                            name="patente"
                            render={({ field: { onChange, value } }) => (
                                <IonInput
                                    onIonChange={(e) => onChange(e.detail.value)}
                                    value={value}
                                    {...register("patente", {
                                        required: "Patente es requerida",
                                    })}
                                ></IonInput>
                            )}
                        />
                    </IonItem>
                </IonCard>
                <IonCol class="ion-align-self-center">
                    <IonButton type="submit" color="primary">Pagar</IonButton>
                </IonCol>
            </IonRow>
            <IonRow class="ion-padding-start">
                <InputErrorMessage errorMessage={errors.patente?.message || ""} />
            </IonRow>
        </form>
    )
}