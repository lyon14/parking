import {
    appsOutline,
    cardOutline,
    cashOutline,
    cellularOutline,
    homeOutline,
    statsChartOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { CalcularPrecio } from "../pages/CalcularPrecio";
import { Home } from "../pages/home";
import { PayParking } from "../pages/PayParking";
import { ParkingStatus } from "../pages/ParkingStatus";
import { Tarifas } from "../pages/Tarifas";

export const listPages: listPage[] = [
    {
        title: "Home",
        url: "/app/home",
        component: Home,
        menu: true,
        icon: homeOutline,
    },
    {
        title: "Pay Parking",
        url: "/app/pay-parking",
        component: PayParking,
        menu: true,
        icon: appsOutline,
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
        component: ParkingStatus,
        menu: true,
        icon: statsChartOutline,
    },
    {
        title: "Tarifas",
        url: "/app/tarifas",
        component: Tarifas,
        menu: true,
        icon: cellularOutline,
    }
];