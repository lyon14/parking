import { IonRow, IonIcon, IonText } from "@ionic/react";
import { alertOutline } from "ionicons/icons";


export const InputErrorMessage: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
    return (
        <IonRow class="ion-align-items-center">
            {errorMessage && (
                <IonIcon color="danger" icon={alertOutline} />
            )}
            <IonText color="danger">{errorMessage}</IonText>
        </IonRow>
    );
};