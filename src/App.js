import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import foto from './assets/foto.jpeg';

export function App() {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.photo} />
          <Text style={style.nome}>ANA MARIA</Text>
          <Text style={style.funcao}>Desenvolvedora Mobile</Text>
          <View>
            <Text>Github</Text>
            <Text>Facebook</Text>
            <Text>Linkedin</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
});
