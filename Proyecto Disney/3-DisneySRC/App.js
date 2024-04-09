import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from './src/screens/PokemonList1';
import LoginForm from './src/screens/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStacks from './src/navigation/NavigationStacks';
import NavigationTabs from './src/navigation/NavigationTabs';
import Navigation from './src/navigation/Navigation';

export default function App() {
  //return <PokemonList/>
  return (
    /*<View>
      <LoginForm name="Gabriel" surname="Milagro López"/>
      <LoginForm name="Charles" surname="White"/>
      <LoginForm name="Zantimag0" surname="El Sabio"/>
    </View>*/
    <NavigationContainer>
      {/* <NavigationStacks/> */}
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
