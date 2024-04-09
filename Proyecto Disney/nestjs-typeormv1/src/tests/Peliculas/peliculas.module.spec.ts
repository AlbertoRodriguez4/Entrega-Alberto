import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from '../../peliculas/entities/pelicula.entity';
import { Categoria } from '../../peliculas/entities/categoria.entity';
import { Favorito } from '../../peliculas/entities/favorito.entity';
import { PeliculasController } from '../../peliculas/controllers/peliculas.controller';
import { PeliculasService } from '../../peliculas/services/peliculas.service';
import { PeliculasModule } from '../../peliculas/peliculas.module';

describe('PeliculasModule', () => {
  let module: PeliculasModule;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Pelicula, Categoria, Favorito],
          synchronize: true,
          keepConnectionAlive: true,
        }),
        PeliculasModule,
      ],
    }).compile();

    module = moduleFixture.get<PeliculasModule>(PeliculasModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have controller', () => {
    const controller = module.get<PeliculasController>(PeliculasController);
    expect(controller).toBeDefined();
  });

  it('should have service', () => {
    const service = module.get<PeliculasService>(PeliculasService);
    expect(service).toBeDefined();
  });
});
