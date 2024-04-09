describe('PokemonList component', () => {
  test('fetches and renders list of pokemons', async () => {
    const renderedComponent = render(<PokemonList />);

    await waitFor(() => {
      const pokemonList = renderedComponent.getAllByTestId('pokemon-item');
      expect(pokemonList.length).toBeGreaterThan(0);
    });
  });
});
