import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { Response, response } from 'express';
import { citaDto } from 'src/dto/cita.dto';
import { PrismaService } from 'src/prisma.service';
import { veterinariasDto } from 'src/dto/veterinaria.dto';

@Injectable()
export class CitaService {

    constructor(private prisma:PrismaService){}

    async addCita(cita:citaDto, response:Response): Promise<Response>{
        await this.prisma.cita.create({data:cita}).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:201, message:"Cita Agendada"})
    }

    async cancelCita(cita:citaDto, response:Response){
        await this.prisma.cita.delete({
            where:{
                id: cita.id
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        })

        response.json({status:200, message:"Cita cancelada"}) ;
    }

    async getAllCita(veterinaria:veterinariasDto, response:Response){
        const data = await this.prisma.cita.findMany({
            where: {
                veterinariaId: veterinaria.id
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:200, data});
    }

    async getUserCita(userId:string, response:Response){
        const data = await this.prisma.cita.findMany({
            where: {
                userId: userId
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:200, data});
    }
}
