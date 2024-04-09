import React from "react";
import { useNavigation } from "@react-navigation/native";
import { PokemonCard } from "../components/PokemonCard";
import renderer from "react-test-renderer";

describe("<PokemonCard />", () => {
  it("renders correctly", () => {
    const navigation = useNavigation();
    const tree = renderer
      .create(<PokemonCard item={{ id: "1", name: "Bulbasaur", imagen: "" }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();

    const instance = tree.props;
    instance.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith("Pokemon", { id: "1" });
  });
});
