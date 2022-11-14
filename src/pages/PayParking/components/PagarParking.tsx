import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonRow, IonCard, IonGrid} from "@ionic/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { selectPatenteAuthenticated } from "../../../store/activo/selectors/SelectPatenteAuthenticated";
import { PagarInfo } from "./PagarInfo";


export const PagarParking: React.FC = () => {

    const PatenteAuthenticated = useSelector(selectPatenteAuthenticated);

    if(!PatenteAuthenticated) {
        return <Redirect to="/app/pay-parking" />
    }
    
    return(
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Pagar Parking</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonRow class="ion-justify-content-center ion-padding">
                        <IonCard style={{width:'100%'}}>
                            <IonGrid class="ion-margin">
                                <PagarInfo />
                            </IonGrid>
                        </IonCard>
                    </IonRow>
                </section>
            </IonContent>
        </IonPage>
    );
}