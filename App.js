import React from 'react';
import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cestaTextos';
/* import AppLoading from 'expo-app-loading'; */


export default function App() {
  const [fontesCarregadas] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if(!fontesCarregadas) {
    return < View /> /* AppLoading não deu certo */
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar/>
        <Cesta {...mock} />        
    </SafeAreaView>
  );
}


