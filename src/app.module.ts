import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [JogadoresModule, CategoriasModule, EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
