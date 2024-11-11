import { IsEnum, IsNotEmpty, IsString } from "class-validator";


enum typeUser {
    cuidador="cuidador",
    contratador="contratador"
}
export class UserDto{

    id:string

    @IsString()
    @IsNotEmpty()
    @IsEnum(typeUser)
    tipo_usuario: string;
}