import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TServicesDetails = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export type TServiceType = {
  id: string;
  title: string;
  description: string;
  img: string;
  details: string[];
  servicesDetails: TServicesDetails[];
};
