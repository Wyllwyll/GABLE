import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateGableTypeDto {


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string
}
