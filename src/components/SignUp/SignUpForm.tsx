import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { InputErrorMessage } from "../errors/InputErrorMessage";
import { createUser } from "../../store/users/actions/createUser"
import { AppDispatch } from "../../store";

export const SignUpForm: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            telefono: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            dispatch(createUser(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <IonContent>
            <IonGrid style={{ height: "100%" }}>
                <IonRow style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <IonCol style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <IonCard style={{ width: "500px" }}>
                            <IonCardHeader class="ion-text-center">
                                <IonCardTitle>Registrate</IonCardTitle>
                            </IonCardHeader>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <IonItem>
                                    <IonLabel position="floating">Nombre:</IonLabel>
                                    <Controller
                                        control={control}
                                        name="name"
                                        render={({ field: { onChange, value } }) => (
                                            <IonInput
                                                onIonChange={(e) => onChange(e.detail.value)}
                                                value={value}
                                                {...register("name", {
                                                    required: "Nombre es requerido",
                                                    pattern: {
                                                        value: /^[A-Za-z]*$/i,
                                                        message: "Nombre invalido",
                                                    },
                                                })}
                                                placeholder="nombre"
                                            ></IonInput>
                                        )}
                                    />
                                </IonItem>
                                <InputErrorMessage errorMessage={errors.name?.message || ""} />

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

                                <IonItem>
                                    <IonLabel position="floating">Teléfono:</IonLabel>
                                    <Controller
                                        control={control}
                                        name="telefono"
                                        render={({ field: { onChange, value } }) => (
                                            <IonInput
                                                onIonChange={(e) => onChange(e.detail.value)}
                                                value={value}
                                                {...register("telefono", {
                                                    required: "Telefono es requerido",
                                                    pattern: {
                                                        value: /^[0-9]*$/i,
                                                        message: "Telefono invalido",
                                                    }
                                                })}
                                                placeholder="telefono"
                                            ></IonInput>
                                        )}
                                    />
                                </IonItem>
                                <InputErrorMessage errorMessage={errors.telefono?.message || ""} />

                                <IonRow class="ion-justify-content-center ion-margin">
                                    <IonButton color="primary" type="submit" >Registrarse</IonButton>
                                </IonRow>
                            </form>
                            <IonRow class="ion-justify-content-center ion-align-items-center">
                                <IonLabel>Ya tienes cuenta</IonLabel>
                                <IonButton color="primary" href="/login" fill="clear">Inicia Session</IonButton>
                            </IonRow>
                        </IonCard>

                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};