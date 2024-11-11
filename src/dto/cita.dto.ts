import { IsNotEmpty, IsString } from "class-validator";

export class citaDto {

    id:string

    @IsString()
    detalles:string

    @IsString()
    @IsNotEmpty()
    userId:string

    @IsString()
    @IsNotEmpty()
    veterinariaId:string
}