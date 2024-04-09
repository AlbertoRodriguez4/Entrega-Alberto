describe('<NavigationStacks />', () => {
  test('should render correctly', () => {
    const component = renderer.create(
      <NavigationStacks />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
