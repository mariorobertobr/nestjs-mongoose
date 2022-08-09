import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateJogadorDto {
  @IsString()
  telefoneCelular: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  ranking: string;

  @IsNumber()
  posicaoRanking: number;

  @IsString()
  urlFoto: string;
}
