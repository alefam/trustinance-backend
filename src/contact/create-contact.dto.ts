import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    vorname: string;

    @IsNotEmpty()
    @IsString()
    nachname: string;

    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @IsString()
    handy: string;

    @IsNotEmpty()
    @IsString()
    thema: string;

    @IsNotEmpty()
    @IsString()
    nachricht: string;
}