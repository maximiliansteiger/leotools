import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEquipmentTypeDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    category_id: number;

}
