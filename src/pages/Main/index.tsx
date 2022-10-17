import { IonPage, IonSplitPane } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Menu } from "../../components/menu";
import { selectIsAuthenticated } from "../../store/users/selectors/SelectIsAuthenticated";

export const Main: React.FC = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);

    console.log(isAuthenticated);

    if(!isAuthenticated) {
        return <Redirect to="/login" />
    }

    return(
        <IonPage>
            <IonSplitPane contentId="main">
                <Menu />
            </IonSplitPane>    
        </IonPage>
    )
}