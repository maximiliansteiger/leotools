import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEquipmentDto {


    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    equipmentTypeId: number;

    @ApiProperty()
    status: string;

}
