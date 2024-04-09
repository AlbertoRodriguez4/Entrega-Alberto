import { Test, TestingModule } from '@nestjs/testing';
import { PeliculasController } from '../../../peliculas/controllers/peliculas.controller';
import { PeliculasService } from '../../../peliculas/services/peliculas.service';
import { Pelicula } from '../../../peliculas/entities/pelicula.entity';

describe('PeliculasController', () => {
  let controller: PeliculasController;
  let service: PeliculasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeliculasController],
      providers: [
        {
          provide: PeliculasService,
          useValue: {
            findAll: jest.fn(() => Promise.resolve(<Pelicula[]>[])),
            findByCategoria: jest.fn(() => Promise.resolve(<Pelicula[]>[])),
          },
        },
      ],
    }).compile();

    controller = module.get<PeliculasController>(PeliculasController);
    service = module.get<PeliculasService>(PeliculasService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería llamar a findAll del servicio', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('debería llamar a findByCategoria del servicio', async () => {
    const categoriaId = 1;
    await controller.findByCategoria(categoriaId);
    expect(service.findByCategoria).toHaveBeenCalledWith(categoriaId);
  });
});
