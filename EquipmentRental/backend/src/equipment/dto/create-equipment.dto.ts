import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEquipmentDto {

    @ApiProperty()
    @IsString()
    set: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    equipmentTypeId: number;

    @ApiProperty()
    status: string;

    @ApiProperty()
    serialNumber: string;

    @ApiProperty()
    notes: string;

    @ApiProperty()
    anlagenummer: string;

}