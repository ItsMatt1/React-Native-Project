// import React from 'react'; NOT NEEDED
import { SafeAreaView, StatusBar } from 'react-native';
import Cesta from './src/screens/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

