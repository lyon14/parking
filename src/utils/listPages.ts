import {
    cardOutline,
    cashOutline,
    homeOutline,
    statsChartOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { CalcularPrecio } from "../pages/CalcularPrecio";
import { Home } from "../pages/home";
import { PayParking } from "../pages/PayParking";


export const listPages: listPage[] = [
    {
        title: "Home",
        url: "/app/pay-parking",
        component: Home,
        menu: true,
        icon: homeOutline,
    },
    {
        title: "Pay Parking",
        url: "/app/test",
        component: PayParking,
        menu: true,
        icon: cardOutline,
    },
    {
        title: "Calcular Precio",
        url: "/app/calcular-precio",
        component: CalcularPrecio,
        menu: true,
        icon: cashOutline,
    },
    {
        title: "Estado del Parking",
        url: "/app/parking-status",
        component: PayParking,
        menu: true,
        icon: statsChartOutline,
    },
];