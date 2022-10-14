import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateStatusDto } from './create-status.dto';

export class UpdateStatusDto extends PartialType(CreateStatusDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    @IsString()
    name: string;
}
