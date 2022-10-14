import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipmentModule } from './equipment/equipment.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ReservationModule } from './reservation/reservation.module';
import { EquipmentTypeModule } from './equipment-type/equipment-type.module';
import { StatusModule } from './status/status.module';
import { EquipmentController } from './equipment/equipment.controller';

@Module({
  imports: [EquipmentModule, UserModule, RoleModule, ReservationModule, EquipmentTypeModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
