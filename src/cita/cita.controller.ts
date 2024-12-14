import { Response } from 'express';
import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { CitaService } from './cita.service';
import { citaDto } from 'src/dto/cita.dto';

@Controller('cita')
export class CitaController {

    constructor(private citaS:CitaService) {}

    @Post()
    addCita(@Body() nuevaCita:citaDto, @Res() response:Response) {
        return this.citaS.addCita(nuevaCita, response);
    }

    @Delete(':id')
    deleteCita(@Param('id') cita:string, @Res() response:Response) {
        return this.citaS.cancelCita(cita, response);
    }

    @Get('veterinaria/:id')
    getAllCita(@Param('id') veterinaria:string, @Res() response:Response){
        return this.citaS.getAllCita(veterinaria, response);
    }

    @Get(':userId')
    getUserCita(@Param('userId') userId:string, @Res() response:Response){
        return this.citaS.getUserCita(userId, response);
    }
}
