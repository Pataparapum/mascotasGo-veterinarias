import { Module } from '@nestjs/common';
import { VeterinariaModule } from './veterinaria/veterinaria.module';
import { CitaModule } from './cita/cita.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/jwt.constant';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    VeterinariaModule,
    CitaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
  
  ],
  providers: [PrismaService],
})
export class AppModule {}
