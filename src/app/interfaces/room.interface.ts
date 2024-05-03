import { Device } from "./device.interface";

export interface Room {
    id: number | undefined,
    nome: string;
    imagem: string;
    isSelected: boolean;
    devices: Device[];
  }