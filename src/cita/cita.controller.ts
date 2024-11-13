import { response, Response } from 'express';
import { Body, Controller, Delete, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { CitaService } from './cita.service';
import { citaDto } from 'src/dto/cita.dto';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { JwtAuthGuard } from 'src/jwt/jwt.guard';

@Controller('cita')
@UseGuards(JwtAuthGuard)
export class CitaController {

    constructor(private citaS:CitaService) {}

    @Post()
    addCita(@Body() nuevaCita:citaDto, @Res() response:Response) {
        return this.citaS.addCita(nuevaCita, response);
    }

    @Delete()
    deleteCita(@Body() cita:citaDto, @Res() response:Response) {
        return this.citaS.cancelCita(cita, response);
    }

    @Get()
    getAllCita(@Body() veterinaria:veterinariasDto, @Res() response:Response){
        return this.citaS.getAllCita(veterinaria, response);
    }

    @Get(':userId')
    getUserCita(@Param('userId') userId:string, @Res() response:Response){
        return this.citaS.getUserCita(userId, response);
    }
}
