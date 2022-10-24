import { FC } from "react";

export type listPage = {
  title: string;
  url: string;
  icon: string;
  menu: boolean;
  component: FC;
};
