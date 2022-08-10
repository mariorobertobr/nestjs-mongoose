import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    if (!createCategoriaDto.categoria || !createCategoriaDto.descricao) {
      throw new HttpException('Categoria or descricao is empty', 400);
    }

    const createCategoria = await this.prisma.categoria.create({
      data: createCategoriaDto,
    });

    return createCategoria;
  }

  async findAll() {
    const categorias = await this.prisma.categoria.findMany();

    return categorias;
  }

  async findOne(categoria: string) {
    const categoriaName = await this.prisma.categoria.findUnique({
      where: {
        categoria,
      },
    });

    return categoriaName;
  }

  async update(categoria: string, updateCategoriaDto: UpdateCategoriaDto) {
    const categoriaName = await this.prisma.categoria.findUnique({
      where: {
        categoria,
      },
    });

    if (!categoriaName) {
      throw new HttpException('Categoria not found', 404);
    }

    const updatedCategoria = await this.prisma.categoria.update({
      where: {
        categoria,
      },
      data: updateCategoriaDto,
    });

    return updatedCategoria;
  }

  async remove(categoria: string) {
    const categoriaName = await this.prisma.categoria.findUnique({
      where: {
        categoria,
      },
    });

    if (!categoriaName) {
      throw new HttpException('Categoria not found', 404);
    }
    return;
  }
}
