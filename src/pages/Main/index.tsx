import { IonPage, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Menu } from "../../components/menu";
import { selectIsAuthenticated } from "../../store/users/selectors/SelectIsAuthenticated";
import { selectListPages } from "../../store/users/selectors/SelectListPages";

export const Main: React.FC = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const Pages = useSelector(selectListPages);

    if(!isAuthenticated) {
        return <Redirect to="/login" />
    }

    return(
        <IonPage>
            <IonSplitPane contentId="main">
                <Menu />
                <IonRouterOutlet id="main">
                    {Pages.map((Page, index) => (
                        <Route key={index} path={Page.url}>
                            {Page.component && <Page.component />}
                        </Route>
                    ))}
                </IonRouterOutlet>
            </IonSplitPane>    
        </IonPage>
    )
}