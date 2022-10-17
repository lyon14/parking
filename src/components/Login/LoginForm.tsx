import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { InputErrorMessage } from "../errors/InputErrorMessage";
import { login } from "../../store/users/actions/login";
import { initState } from "../../store/users";

export const LoginForm: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            dispatch(login(data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(initState());
    }, [dispatch]);

    return (
        <IonContent>
            <IonGrid style={{ height: "100%" }}>
                <IonRow style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <IonCol style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IonCard style={{ width: "500px" }}>
                            <IonCardHeader class="ion-text-center">
                                <IonCardTitle>Login</IonCardTitle>
                            </IonCardHeader>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <IonItem>
                                    <IonLabel position="floating">Email:</IonLabel>
                                    <Controller
                                        control={control}
                                        name="email"
                                        render={({ field: { onChange, value } }) => (
                                            <IonInput
                                                onIonChange={(e) => onChange(e.detail.value)}
                                                value={value}
                                                {...register("email", {
                                                    required: "Email es requerido",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Email invalido",
                                                    },
                                                })}
                                                placeholder="Email@email.com"
                                            ></IonInput>
                                        )}
                                    />
                                </IonItem>
                                <InputErrorMessage errorMessage={errors.email?.message || ""} />
                                
                                <IonItem>
                                    <IonLabel position="floating">Contraseña:</IonLabel>
                                    <Controller
                                        control={control}
                                        name="password"
                                        render={({ field: { onChange, value } }) => (
                                            <IonInput
                                                onIonChange={(e) => onChange(e.detail.value)}
                                                value={value}
                                                {...register("password", {
                                                    required: "Contraseña es requerido",
                                                    pattern: {
                                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                                                        message: "Contraseña debe tener al menos 8 caracteres, una letra y un numero",
                                                    },
                                                })}
                                                type="password"
                                                placeholder="Contraseña"
                                            ></IonInput>
                                        )}
                                    />
                                </IonItem>
                                <InputErrorMessage errorMessage={errors.password?.message || ""} />

                                <IonRow class="ion-justify-content-center ion-margin">
                                    <IonButton color="primary" type="submit">Ingresar</IonButton>
                                </IonRow>
                            </form>
                            <IonRow class="ion-justify-content-center ion-align-items-center">
                                <IonLabel>¿No tienes cuenta?</IonLabel>
                                <IonButton color="primary" href="/signUp" fill="clear">Registrate</IonButton>
                            </IonRow>
                        </IonCard>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </IonContent>
    );
};