import { Module } from '@nestjs/common';
import { VeterinariaController } from './veterinaria.controller';
import { VeterinariaService } from './veterinaria.service';
import { PrismaService } from '../prisma.service';


@Module({
  controllers: [VeterinariaController],
  providers: [VeterinariaService, PrismaService]
})
export class VeterinariaModule {}
