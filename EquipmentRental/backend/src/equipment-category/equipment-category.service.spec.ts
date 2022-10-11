import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentCategoryService } from './equipment-category.service';

describe('EquipmentCategoryService', () => {
  let service: EquipmentCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentCategoryService],
    }).compile();

    service = module.get<EquipmentCategoryService>(EquipmentCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
