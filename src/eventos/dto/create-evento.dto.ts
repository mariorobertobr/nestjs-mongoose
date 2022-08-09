import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  operacao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
