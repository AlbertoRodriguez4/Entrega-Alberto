import { Entity, Column, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../users/entities/user.entity';
import * as chai from 'chai';
import { Customer } from '../../../users/entities/customer.entity';

describe('Customer Entity', () => {
  it('should be defined', () => {
    chai.expect(Customer).to.not.be.undefined;
  });

  it('should have id', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('id');
  });

  it('should have name', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('name');
  });

  it('should have lastName', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('lastName');
  });

  it('should have phone', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('phone');
  });

  it('should have createAt', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('createAt');
  });

  it('should have updateAt', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('updateAt');
  });

  it('should have user', () => {
    const customer = new Customer();
    chai.expect(customer).to.have.property('user');
  });
});

