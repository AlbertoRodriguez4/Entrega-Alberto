describe('Navigation', () => {
  it('renders all tabs correctly', () => {
    const navigation = renderer.create(<Navigation />).toJSON();
    expect(navigation).toMatchSnapshot();
  });
});

