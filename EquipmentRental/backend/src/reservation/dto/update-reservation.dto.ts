import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    @ApiProperty()
    id: number;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    equipmentId: number;

    @ApiProperty()
    statusId: number;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;
    
}
