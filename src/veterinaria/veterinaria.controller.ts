import { Body, Controller, Delete, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from 'src/dto/user.dto';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { VeterinariaService } from './veterinaria.service';
import { datosDto } from 'src/dto/datos.dto';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';

@Controller('veterinaria')
@UseGuards(JwtAuthGuard)
export class VeterinariaController {

    constructor(private veterinariaDb:VeterinariaService){}

    @Post()
    async addVeterinara(@Body() datos:datosDto, @Res() response:Response): Promise<Response> {
        return await this.veterinariaDb.addVeterinaria(datos, response);
    }

    @Put()
    async updateVeterinaria(@Body() veterinarias:{nueva:veterinariasDto, actual: veterinariasDto}, @Res() response:Response): Promise<Response>{
        return await this.veterinariaDb.editVeterinaria(veterinarias, response);
    }

    @Delete()
    async deleteVeterinaria(@Body() veterinaria:veterinariasDto, @Res() response:Response): Promise<Response> {
        return await this.veterinariaDb.deleteVeterinaria(veterinaria, response);
    }
}
