import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class veterinariasDto {

    id:string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre_veterinaria:string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    direccion:string

    @IsString()
    dueno:string
}

