import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Customer } from './customer.entity';
import { Favorito } from 'src/peliculas/entities/favorito.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string; // encript

  @Column({ type: 'varchar', length: 100 })
  role: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true }) // indicaciones de unión, usuarios que no son clientes
  @JoinColumn() // referencia real
  customer: Customer;

  @OneToMany(() => Favorito, (favorito) => favorito.user)
  favoritos: Favorito[];
}
function PrimaryGenerationColumn(): (target: User, propertyKey: "id") => void {
  throw new Error('Function not implemented.');
}


