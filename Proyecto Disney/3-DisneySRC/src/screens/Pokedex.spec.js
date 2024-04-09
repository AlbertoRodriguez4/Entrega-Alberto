describe('Pokedex', () => {
  it('loads data correctly', async () => {
    const mockResponse = [{id: 1, titulo: 'Test1', imagen: 'test1.jpg'}, {id: 2, titulo: 'Test2', imagen: 'test2.jpg'}];
    jest.spyOn(require('../api/disney'), 'getPokemonsApi').mockResolvedValue(mockResponse);

    const props = {navigation: {}};
    const wrapper = shallow(<Pokedex {...props} />);

    await flushPromises();
    wrapper.update();

    expect(wrapper.find('PokemonList').prop('peliculas')).toEqual([
      {id: 1, name: 'Test1', imagen: 'test1.jpg'},
      {id: 2, name: 'Test2', imagen: 'test2.jpg'},
    ]);
  });
});

