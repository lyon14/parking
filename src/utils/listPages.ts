import {
    cardOutline,
    cashOutline,
    homeOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { PayParking } from "../pages/PayParking";

export const listPages: listPage[] = [
    {
        title: "Home",
        url: "/app/pay-parking",
        component: PayParking,
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
        title: "Precios",
        url: "/app/precios",
        component: PayParking,
        menu: true,
        icon: cashOutline,
    },
];