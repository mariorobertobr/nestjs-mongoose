import { PartialType } from '@nestjs/mapped-types';
import { CreateJogadorDto } from './create-jogador.dto';

export class UpdateJogadoreDto extends PartialType(CreateJogadorDto) {}
