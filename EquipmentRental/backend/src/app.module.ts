import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [EquipmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
