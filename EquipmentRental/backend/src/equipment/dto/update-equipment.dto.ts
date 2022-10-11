import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEquipmentDto } from './create-equipment.dto';

export class UpdateEquipmentDto extends PartialType(CreateEquipmentDto) {

    @ApiProperty()
    id: number;

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
