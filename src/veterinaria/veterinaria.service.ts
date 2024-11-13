import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { datosDto } from 'src/dto/datos.dto';
import { UserDto } from 'src/dto/user.dto';
import { veterinariasDto } from 'src/dto/veterinaria.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VeterinariaService {

    constructor(private prisma:PrismaService){}

    async addVeterinaria(datos:datosDto, response:Response): Promise<Response>{
        const { user, veterinaria } = datos;

        if (user.tipo_usuario != 'cuidador') return response.json({status:400, error: "Solo los usuarios cuidadores pueden asociar veterinarias a sus perfiles"});

        veterinaria.dueno = user.id;
        await this.prisma.veterinarias.create({data:veterinaria}).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:201, message: "Veterinaria creada con exito"});
    }

    async editVeterinaria(vetererinarias:{nueva:veterinariasDto, actual:veterinariasDto}, response:Response){
        const { nueva, actual } = vetererinarias

        await this.prisma.veterinarias.update({
            where: {
                id: actual.id,
            },
            data: {
                nombre_veterinaria: nueva.nombre_veterinaria,
                direccion: nueva.direccion
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:201, message:"veterinaria modificada con exito"});
    }

    async deleteVeterinaria(veterinaria:veterinariasDto, response:Response) {
        await this.prisma.cita.deleteMany({
            where: {
                veterinariaId: veterinaria.id,
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });
        
        await this.prisma.veterinarias.delete({
            where: {
                id: veterinaria.id,
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:200, message:"veterinaria eliminada"});
    }

    async getAllUserVeterinarias(user:UserDto, response:Response): Promise<Response> {
        const data = await this.prisma.veterinarias.findUnique({
            where: {
                dueno: user.id
            }
        }).catch((error) => {
            throw response.json({status:500, error});
        });

        return response.json({status:200, data})
    }
}
