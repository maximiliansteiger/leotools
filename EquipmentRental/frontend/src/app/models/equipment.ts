import { EquipmentType } from "./equipmentType";

export class Equipment {
    public id!: number;
    public name!: string;
    public equipmentTypeId!: number;
    public EquipmentType!: EquipmentType;
}