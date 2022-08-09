import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateEventoDto } from 'src/eventos/dto/create-evento.dto';

export class CreateCategoriaDto {
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: CreateEventoDto[];
}
