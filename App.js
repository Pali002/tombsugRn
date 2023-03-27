/*
* File: App.js
* Author: Zentai Pál
* Copyright: 2023, Zentai Pál
* Group: Szoft-II-N
* Date: 2023-03-27
* Github: https://github.com/Pali002/
* Licenc: GNU GPL
*/

import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './components/Button';

function calcRadius(side, alpha) {
  let rad = alpha * Math.PI / 180;
  let radius = 1.0/2.0 * side * Math.sin(rad);
  return radius;
}

export default function App() {

  const [side, setSide] = useState('');
  const [alpha, setAlpha] = useState('');
  const [radius, setRadius] = useState('');
  
  function startCalculation() {
    let radius = calcRadius(side, alpha);
    setRadius(radius);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tombsug</Text>
      
      <View style={styles.body}>
        
        <Text style={styles.title} >Rombuszba írható kör sugara</Text>
        
        <Text>Oldal</Text>
        <TextInput style={styles.input} onChangeText={sideInput => setSide(sideInput)}/>
        
        <Text>Alfaszög</Text>
        <TextInput style={styles.input} onChangeText={alphaInput => setAlpha(alphaInput)}/>

        <Button
        onPress={startCalculation}
        />

        <Text>Sugár</Text>
        <TextInput style={styles.input} value={radius}/>
      </View>

      <View>
        <Text style={styles.about}>
          Zentai Pál, Szoft-II-N, 2023-03-27
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'purple',
    width: '100%',
    height: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 20,
    width: '100%',
  },
  body: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    backgroundColor: 'purple',
    textAlign: 'center',
    width: '100%'
  }
});
