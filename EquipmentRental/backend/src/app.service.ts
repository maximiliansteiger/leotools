import { Get, Injectable } from '@nestjs/common';
import { EquipmentService } from './equipment/equipment.service';


@Injectable()
export class AppService {

  equipmentService: EquipmentService;

  getHello(): string {
    return 'Hello World!';
  }

}
