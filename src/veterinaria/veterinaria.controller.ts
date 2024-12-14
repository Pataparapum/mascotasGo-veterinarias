import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { VeterinariaService } from './veterinaria.service';
import { datosDto } from 'src/dto/datos.dto';


@Controller('veterinaria')
export class VeterinariaController {

    constructor(private veterinariaDb:VeterinariaService){}

    
    @Post() 
    async addVeterinara(@Body() datos:datosDto, @Res() response:Response): Promise<Response> {
        return await this.veterinariaDb.addVeterinaria(datos, response);
    }

    @Put(':veterinariaId')
    async updateVeterinaria(@Param('veterinariaId') id:string, @Body() veterinarias:veterinariasDto, @Res() response:Response): Promise<Response>{
        return await this.veterinariaDb.editVeterinaria(id, veterinarias, response);
    }

    @Delete(':veterinariaId')
    async deleteVeterinaria(@Param('veterinariaId') veterinaria:string, @Res() response:Response): Promise<Response> {
        return await this.veterinariaDb.deleteVeterinaria(veterinaria, response);
    }

    @Get(':user')
    async getAll(@Param('user') user:string ,@Res() response:Response){
        return await this.veterinariaDb.getAllUserVeterinarias(user, response);
    }
}
