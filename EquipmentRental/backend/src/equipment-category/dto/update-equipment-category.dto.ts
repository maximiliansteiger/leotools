import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEquipmentCategoryDto } from './create-equipment-category.dto';

export class UpdateEquipmentCategoryDto extends PartialType(CreateEquipmentCategoryDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;
}
