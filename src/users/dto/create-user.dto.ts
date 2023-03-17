import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nom: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    prenom: string


    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    adresse: string

}
