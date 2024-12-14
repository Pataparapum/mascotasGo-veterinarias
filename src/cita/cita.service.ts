import { Injectable } from '@nestjs/common';
import { Response,} from 'express';
import { citaDto } from 'src/dto/cita.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CitaService {

    constructor(private prisma:PrismaService){}

    async addCita(cita:citaDto, response:Response): Promise<Response>{
        
        await this.prisma.cita.create({data:cita}).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:201, message:"Cita Agendada"})
    }

    async cancelCita(cita:string, response:Response): Promise<Response>{
        await this.prisma.cita.delete({
            where:{
                id: cita
            }
        }).catch((error) => {
            throw response.json({error});
        })

        return response.json({status:200, message:"Cita cancelada"}) ;
    }

    async getAllCita(veterinaria:string, response:Response): Promise<Response>{
        const data = await this.prisma.cita.findMany({
            where: {
                veterinariaId: veterinaria
            }
        }).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:200, data});
    }

    async getUserCita(userId:string, response:Response):Promise<Response>{
        const data = await this.prisma.cita.findMany({
            where: {
                userId: userId
            }
        }).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:200, data});
    }
}
