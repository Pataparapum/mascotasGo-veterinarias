import { Module } from '@nestjs/common';
import { CitaController } from './cita.controller';
import { CitaService } from './cita.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CitaController],
  providers: [CitaService, PrismaService]
})
export class CitaModule {}
