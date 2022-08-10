import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEventoDto: CreateEventoDto) {
    if (
      !createEventoDto.nome ||
      !createEventoDto.operacao ||
      !createEventoDto.valor
    ) {
      throw new HttpException('Evento or descricao is empty', 400);
    }

    const createEvento = await this.prisma.eventos.create({
      data: createEventoDto,
    });

    return createEvento;
  }

  findAll() {
    return this.prisma.eventos.findMany();
  }

  findOne(id: string) {
    const evento = this.prisma.eventos.findUnique({
      where: {
        id,
      },
    });

    if (!evento) {
      throw new HttpException('Evento not found', 404);
    }

    return evento;
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    const evento = this.prisma.eventos.findUnique({
      where: {
        id,
      },
    });

    if (!evento) {
      throw new HttpException('Evento not found', 404);
    }

    const updatedEvento = this.prisma.eventos.update({
      where: {
        id,
      },
      data: updateEventoDto,
    });

    return updatedEvento;
  }

  remove(id: string) {
    const evento = this.prisma.eventos.findUnique({
      where: {
        id,
      },
    });

    if (!evento) {
      throw new HttpException('Evento not found', 404);
    }

    const deletedEvento = this.prisma.eventos.delete({
      where: {
        id,
      },
    });

    return deletedEvento;
  }
}
