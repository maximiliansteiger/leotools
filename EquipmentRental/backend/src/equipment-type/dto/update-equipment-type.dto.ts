import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEquipmentTypeDto } from './create-equipment-type.dto';

export class UpdateEquipmentTypeDto extends PartialType(CreateEquipmentTypeDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

}
