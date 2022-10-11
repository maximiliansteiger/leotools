import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentCategoryController } from './equipment-category.controller';
import { EquipmentCategoryService } from './equipment-category.service';

describe('EquipmentCategoryController', () => {
  let controller: EquipmentCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentCategoryController],
      providers: [EquipmentCategoryService],
    }).compile();

    controller = module.get<EquipmentCategoryController>(EquipmentCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
