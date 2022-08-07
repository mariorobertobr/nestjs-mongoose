import { Injectable } from '@nestjs/common';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

@Injectable()
export class JogadoresService {
  create(createJogadoreDto: CreateJogadorDto) {
    return 'This action adds a new jogadore';
  }

  findAll() {
    return `This action returns all jogadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogadore`;
  }

  update(id: number, updateJogadoreDto: UpdateJogadoreDto) {
    return `This action updates a #${id} jogadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogadore`;
  }
}
