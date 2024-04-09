import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from '../entities/pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeliculasService {
    //Inserto el repositorio para que gestione las transacciones con la base de datos.
    constructor(
        @InjectRepository(Pelicula) private peliculasRepository: Repository<Pelicula>,
    ){}

    async findAll(): Promise<Pelicula[]> {
        console.log('Listando TODAS las películas.');
        return this.peliculasRepository.find(); // Utiliza el método find() sin argumentos para obtener todas las entidades.
    }

    async findByCategoria(categoriaId: number): Promise<Pelicula[]> {
        return this.peliculasRepository
          .createQueryBuilder('pelicula')
          .innerJoinAndSelect('pelicula.categorias', 'categoria')
          .where('categoria.id = :categoriaId', { categoriaId })
          .getMany();
      }
    
}
