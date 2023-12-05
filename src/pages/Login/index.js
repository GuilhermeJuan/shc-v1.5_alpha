import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite teu email..." style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite tua senha..." style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoHome} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTextBack}>Quero me cadastrar!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.registerText}>Voltar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#230152',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 20,
    alignSelf: 'center',
  },
  registerText: {
    color: '#38a69d',
    fontSize: 16,
  },
  buttonGoHome: {
    backgroundColor: '#0b203d',
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonTextBack: {
    color: '#FFF',
    fontSize: 16,
  },
  confirmExitText: {
    color: '#f00',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});
