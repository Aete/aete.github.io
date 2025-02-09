import { ModalInterface } from "../types/modals";
import { dwellingByWalling } from "./ProjectlData/DwellingByWalling";
import { QRcity } from "./ProjectlData/QRcity";
import { PlanGenerator } from "./ProjectlData/PlanGenerator";
import { TheFrame } from "./ProjectlData/TheFrame";
import { TinyBike } from "./ProjectlData/TinyBike";

export const modalData: ModalInterface[] = [
  dwellingByWalling,
  QRcity,
  PlanGenerator,
  TheFrame,
  TinyBike,
];
