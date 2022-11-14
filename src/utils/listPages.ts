import {
    appsOutline,
    cardOutline,
    cashOutline,
    cellularOutline,
    homeOutline,
    statsChartOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { Home } from "../pages/home";
import { Inventario } from "../pages/Inventario";

export const listPages: listPage[] = [
    {
        title: "Home",
        url: "/app/home",
        component: Home,
        menu: true,
        icon: homeOutline,
    },
    {
        title: "Inventario",
        url: "/app/inventario",
        component: Inventario,
        menu: true,
        icon: appsOutline,
    },

];