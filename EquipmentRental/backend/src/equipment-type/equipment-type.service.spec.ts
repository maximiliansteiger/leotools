import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentTypeService } from './equipment-type.service';

describe('EquipmentTypeService', () => {
  let service: EquipmentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentTypeService],
    }).compile();

    service = module.get<EquipmentTypeService>(EquipmentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
