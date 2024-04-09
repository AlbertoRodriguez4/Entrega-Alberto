import { Categoria } from '../../../peliculas/entities/categoria.entity';
import { Pelicula } from '../../../peliculas/entities/pelicula.entity';

describe('Categoria', () => {
  let categoria: Categoria;

  beforeEach(() => {
    categoria = new Categoria();
  });

  it('debería estar definida', () => {
    expect(categoria).toBeDefined();
  });

  it('debería tener una propiedad id', () => {
    categoria.id = 1;
    expect(categoria.id).toBe(1);
  });

  it('debería tener una propiedad nombre', () => {
    categoria.nombre = 'Acción';
    expect(categoria.nombre).toBe('Acción');
  });

  it('debería tener una propiedad descripcion', () => {
    categoria.descripcion = 'Películas de acción';
    expect(categoria.descripcion).toBe('Películas de acción');
  });

  it('debería tener una propiedad creado_en', () => {
    const fecha = new Date();
    categoria.creado_en = fecha;
    expect(categoria.creado_en).toBe(fecha);
  });

  it('debería tener una propiedad peliculas', () => {
    const pelicula1 = new Pelicula();
    const pelicula2 = new Pelicula();
    categoria.peliculas = [pelicula1, pelicula2];
    expect(categoria.peliculas).toEqual([pelicula1, pelicula2]);
  });
});
