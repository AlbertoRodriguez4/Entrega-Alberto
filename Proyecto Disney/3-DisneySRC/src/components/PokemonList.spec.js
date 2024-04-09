
describe("PokemonList", () => {
  it("renders a FlatList with correct props", () => {
    const wrapper = shallow(
      <PokemonList peliculas={[{ id: 1, name: "Pikachu" }]} />
    );
    const flatList = wrapper.find(FlatList);

    expect(flatList).toHaveLength(1);
    expect(flatList.prop("data")).toEqual([{ id: 1, name: "Pikachu" }]);
    expect(flatList.prop("numColumns")).toEqual(2);
    expect(flatList.prop("showsVerticalScrollIndicator")).toEqual(false);
    expect(flatList.prop("keyExtractor")).toBeInstanceOf(Function);
    expect(flatList.prop("renderItem")).toBeInstanceOf(Function);
    expect(flatList.prop("contentContainerStyle")).toEqual(
      styles.flatListContentContainer
    );
  });
});
