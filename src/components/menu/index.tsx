import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../store/users/actions/logout";
import { selectListPages } from "../../store/users/selectors/SelectListPages";

export const Menu: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const Pages = useSelector(selectListPages)

    const onLogout = async () => {
        try {
            await dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <IonMenu contentId="main" type="overlay">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>My Parking</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList lines="none">
                        {Pages.filter(({ menu }) => menu).map((Pages, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem
                                    routerLink={Pages.url}
                                >
                                    <IonIcon slot="start" icon={Pages.icon} />
                                    <IonLabel>{Pages.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonList>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton onClick={() => onLogout()} color="danger" expand="full" type="submit" style={{ paddingLeft: 10, paddingRight: 10 }}>Logout</IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonMenu>
        </>
    );
};