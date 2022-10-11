import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEquipmentCategoryDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;
}
