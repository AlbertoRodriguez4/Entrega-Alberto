import { expect } from 'chai';
import { User } from "../../../users/entities/user.entity";

describe('User Entity', () => {
  it('should be defined', () => {
    expect(User).to.not.be.undefined;
  });

  it('should have id', () => {
    const user = new User();
    expect(user).to.have.property('id');
  });

  it('should have email', () => {
    const user = new User();
    expect(user).to.have.property('email');
  });

  it('should have password', () => {
    const user = new User();
    expect(user).to.have.property('password');
  });

  it('should have role', () => {
    const user = new User();
    expect(user).to.have.property('role');
  });

  it('should have createAt', () => {
    const user = new User();
    expect(user).to.have.property('createAt');
  });

  it('should have updateAt', () => {
    const user = new User();
    expect(user).to.have.property('updateAt');
  });

  it('should have customer', () => {
    const user = new User();
    expect(user).to.have.property('customer');
  });

  it('should have favoritos', () => {
    const user = new User();
    expect(user).to.have.property('favoritos');
  });
});

