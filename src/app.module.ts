import { Module } from '@nestjs/common';
import { VeterinariaModule } from './veterinaria/veterinaria.module';
import { CitaModule } from './cita/cita.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { welcomeController } from './welcome.controller';

@Module({
  imports: [
    VeterinariaModule,
    CitaModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  
  ],
  providers: [PrismaService],
  controllers: [welcomeController]
})
export class AppModule {}
