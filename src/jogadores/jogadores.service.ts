import { HttpException, Injectable } from '@nestjs/common';
import { ObjectID } from 'bson';
import { PrismaService } from 'src/prisma.service';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

@Injectable()
export class JogadoresService {
  constructor(private prisma: PrismaService) {}

  async create(createJogadoreDto: CreateJogadorDto) {
    const userExists = await this.prisma.jogador.findUnique({
      where: {
        email: createJogadoreDto.email,
      },
    });

    if (userExists) {
      throw new Error('Email already in use');
    }

    const creaJogador = await this.prisma.jogador.create({
      data: createJogadoreDto,
    });

    return creaJogador;
  }

  async findAll() {
    return await this.prisma.jogador.findMany();
  }

  async findOne(id: string) {
    const jogadorExists = await this.prisma.jogador.findFirst({
      where: {
        id,
      },
    });

    if (!jogadorExists) {
      throw new HttpException('Jogador not found', 404);
    }

    return jogadorExists;
  }

  async update(id: string, updateJogadoreDto: UpdateJogadoreDto) {
    const jogadorExists = await this.prisma.jogador.findUnique({
      where: {
        id,
      },
    });

    if (!jogadorExists) {
      throw new Error('Jogador not found');
    }

    const updatedJogador = await this.prisma.jogador.update({
      where: {
        id,
      },
      data: updateJogadoreDto,
    });

    return updatedJogador;
  }

  async remove(id: string) {
    const jogadorExists = await this.prisma.jogador.findUnique({
      where: {
        id,
      },
    });

    if (!jogadorExists) {
      throw new Error('Jogador not found');
    }

    const deletedJogador = await this.prisma.jogador.delete({
      where: {
        id,
      },
    });

    return deletedJogador;
  }
}
