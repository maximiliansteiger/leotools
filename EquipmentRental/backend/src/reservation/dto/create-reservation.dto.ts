import { ApiProperty } from "@nestjs/swagger";

export class CreateReservationDto {
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
