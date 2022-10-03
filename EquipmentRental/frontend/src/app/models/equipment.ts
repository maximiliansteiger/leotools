import { EquipmentType } from "./equipmentType";

export type Equipment = {
    id: number,
    name: string,
    equipmentTypeId: number,
    EquipmentType: EquipmentType,
    status: string,
}