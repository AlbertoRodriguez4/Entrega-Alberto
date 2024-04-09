import { Categoria } from '../../../peliculas/entities/categoria.entity';
import { Favorito } from '../../../peliculas/entities/favorito.entity';
import { Pelicula } from '../../../peliculas/entities/pelicula.entity';

describe('Pelicula', () => {
  let pelicula: Pelicula;

  beforeEach(() => {
    pelicula = new Pelicula();
  });

  it('should create an instance of Pelicula', () => {
    expect(pelicula).toBeTruthy();
  });

  it('should have an "id" property', () => {
    expect(pelicula.id).toBeDefined();
  });

  it('should have a "titulo" property', () => {
    expect(pelicula.titulo).toBeDefined();
  });

  it('should have a "descripcion" property', () => {
    expect(pelicula.descripcion).toBeDefined();
  });

  it('should have a "fecha_lanzamiento" property', () => {
    expect(pelicula.fecha_lanzamiento).toBeDefined();
  });

  it('should have an "imagen" property', () => {
    expect(pelicula.imagen).toBeDefined();
  });

  it('should have a "creado_en" property', () => {
    expect(pelicula.creado_en).toBeDefined();
  });

  it('should have a "categorias" property', () => {
    expect(pelicula.categorias).toBeDefined();
    expect(pelicula.categorias).toEqual([]);
  });

  it('should have a "favoritos" property', () => {
    expect(pelicula.favoritos).toBeDefined();
    expect(pelicula.favoritos).toEqual([]);
  });
});

