import { User } from 'src/users/entities/user.entity';
import { Pelicula } from '../../../peliculas/entities/pelicula.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity('favoritos')
class FavoritoTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column()
  pelicula_id: number;

  @Column()
  creado_en: Date;

  @ManyToOne(() => User, (user) => user.favoritos)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.favoritos)
  @JoinColumn({ name: 'pelicula_id' })
  pelicula: Pelicula;
}

describe('Favorito', () => {
  it('should be defined', () => {
    const entity = new FavoritoTest();
    expect(entity).toBeDefined();
  });
});
