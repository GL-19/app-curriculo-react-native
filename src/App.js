import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpeg';

export function App() {
  function handlePress(redeSocial) {
    switch (redeSocial) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://linkedin.com');
        break;
      case 'facebook':
        Alert.alert('Meu facebook', 'https://facebook.com');
        break;
      case 'github':
        Alert.alert('Meu github', 'https://github.com');
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.photo} />
          <Text style={style.nome}>ANA MARIA</Text>
          <Text style={style.funcao}>Desenvolvedora Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handlePress('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Disneylandia</Text>
              <Text style={style.card_content_text}>Lalala</Text>
              <Text style={style.card_content_text}>Outro lugar</Text>
            </View>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Formação Academica</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                Ciências da Computação - UFMG
              </Text>
            </View>
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
    alignItems: 'center',
  },
  container_cabecalho: {
    alignItems: 'center',
    marginTop: 25,
    flex: 5,
  },
  photo: {
    width: 180,
    height: 180,
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
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '75%',
  },
  card_container: {
    width: '100%',
    marginTop: 20,
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    width: '50%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
  },

  card_header: {},
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 5,
  },
});
