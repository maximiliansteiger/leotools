import { Equipment } from "src/equipment/entities/equipment.entity";

export class Bookmark {
    id: number;
    userId: number;
    equipmentId: number;
    equipment: Equipment;
}
