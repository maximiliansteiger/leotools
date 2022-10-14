import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder, UploadedFiles } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('equipments')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) { }

  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get('getAll')
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(+id, updateEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }



  @Post('upload')
  @UseInterceptors(FilesInterceptor('file', 10, { dest: './uploads' }))
  uploadMultiple(@UploadedFiles() files: any) {
    for(let file of files){
      this.equipmentService.insertFile(file);
    }
    return files;
  }


}
