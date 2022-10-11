import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateStatusDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;
}
