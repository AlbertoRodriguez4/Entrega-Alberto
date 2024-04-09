import { Test, TestingModule } from '@nestjs/testing';
import { Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pelicula } from '../../../peliculas/entities/pelicula.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PeliculasService } from '../../../peliculas/services/peliculas.service';

@Injectable()
class MockRepository extends Repository<Pelicula> {}

describe('PeliculasService', () => {
  let service: PeliculasService;
  let repository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeliculasService,
        {
          provide: getRepositoryToken(Pelicula),
          useClass: MockRepository,
        },
      ],
    }).compile();

    service = module.get<PeliculasService>(PeliculasService);
    repository = module.get<MockRepository>(getRepositoryToken(Pelicula));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository findAll method', async () => {
    const spy = jest.spyOn(repository, 'find');
    await service.findAll();
    expect(spy).toHaveBeenCalled();
  });

  it('should call repository findByCategoria method', async () => {
    const spy = jest.spyOn(repository, 'createQueryBuilder');
    const mockSelectQueryBuilder = {
      innerJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      getMany: jest.fn(),
    };
    spy.mockReturnValue(mockSelectQueryBuilder as unknown as SelectQueryBuilder<Pelicula>);

    const categoriaId = 1;
    await service.findByCategoria(categoriaId);
    expect(spy).toHaveBeenCalledWith('pelicula');
    expect(mockSelectQueryBuilder.innerJoinAndSelect).toHaveBeenCalledWith('pelicula.categorias', 'categoria');
    expect(mockSelectQueryBuilder.where).toHaveBeenCalledWith('categoria.id = :categoriaId', { categoriaId });
    expect(mockSelectQueryBuilder.getMany).toHaveBeenCalled();
  });
});
