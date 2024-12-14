import { Injectable, Logger } from '@nestjs/common';
import { Response } from 'express';
import { datosDto } from '../dto/datos.dto';
import { veterinariasDto } from '../dto/veterinaria.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class VeterinariaService {

    constructor(private prisma:PrismaService){}

    async addVeterinaria(datos:datosDto, response:Response): Promise<Response>{

        const { user, veterinaria } = datos;

        if (user.tipo_usuario != 'cuidador') return response.json({status:400, error: "Solo los usuarios cuidadores pueden asociar veterinarias a sus perfiles"});

        veterinaria.dueno = user.id;

        await this.prisma.veterinarias.create({data:veterinaria}).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:201, message: "Veterinaria creada con exito"});
    }

    async editVeterinaria(id, vetererinarias:veterinariasDto, response:Response): Promise<Response>{
        await this.prisma.veterinarias.update({
            where: {
                id: id,
            },
            data: {
                nombre_veterinaria: vetererinarias.nombre_veterinaria,
                direccion: vetererinarias.direccion
            }
        }).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:201, message:"veterinaria modificada con exito"});
    }

    async deleteVeterinaria(veterinaria:string, response:Response): Promise<Response>{
        await this.prisma.cita.deleteMany({
            where: {
                veterinariaId: veterinaria,
            }
        }).catch((error) => {
            throw response.json({error});
        });
        
        await this.prisma.veterinarias.delete({
            where: {
                id: veterinaria,
            }
        }).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:200, message:"veterinaria eliminada"});
    }

    async getAllUserVeterinarias(user:string, response:Response): Promise<Response> {
        const data = await this.prisma.veterinarias.findUnique({
            where: {
                dueno: user
            }
        }).catch((error) => {
            throw response.json({error});
        });

        return response.json({status:200, data})
    }
}
