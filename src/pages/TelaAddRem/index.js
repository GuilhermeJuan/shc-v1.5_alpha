// Código da tela de adicionar medicamento em React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select'; // Importe o componente RNPickerSelect
import { Feather } from '@expo/vector-icons';

const AddMedication = ({ navigation }) => {
  // Defina o esquema de validação usando o Yup
  const validationSchema = Yup.object().shape({
    medicationName: Yup.string().required('O nome do medicamento é obrigatório'),
    dosage: Yup.string().required('A dosagem é obrigatória'),
    day: Yup.string().required('O dia é obrigatório'),
    time: Yup.string().required('A hora é obrigatória'),
    stock: Yup.number()
      .min(0, 'O estoque deve ser maior ou igual a zero')
      .required('O estoque é obrigatório'),
    image: Yup.string().required('A imagem é obrigatória'),
  });

  // Defina os valores iniciais do formulário
  const initialValues = {
    medicationName: '',
    dosage: '',
    day: '',
    time: '',
    stock: 0,
    image: '',
  };

  // Defina a função de envio do formulário
  const handleSubmit = (values) => {
    const medication = {
      id: Math.random().toString(36).substr(2, 9), // Gere um id aleatório para o medicamento
      name: values.medicationName,
      dosage: values.dosage,
      day: values.day,
      time: values.time,
      stock: values.stock,
      image: values.image,
    };
    navigation.navigate('Home', { newMedication: medication });
  };

  // Defina os estados para armazenar a opção e o source da imagem
  const [selectedOption, setSelectedOption] = useState('image');
  const [imageSource, setImageSource] = useState(null);
  // Defina o estado image como uma string vazia
  const [image, setImage] = useState('');

  // Defina a função para mudar a opção da imagem
  const handleImageOptionChange = (option) => {
    setSelectedOption(option);
    // Limpa a imagem e o source ao mudar a opção
    setImage(''); // Use a função setImage para atualizar o estado image
    setImageSource(null);
  };

  // Defina a função para escolher a imagem
  const handlePickImage = async (setFieldValue) => {
    let result;
    if (selectedOption === 'image') {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      // Atualize o valor do campo image usando o setFieldValue do Formik
      setFieldValue('image', result.uri);
      setImageSource(result);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          // Adicione aqui a lógica de confirmação antes de voltar
          // Se o usuário confirmar, navegue de volta para a tela 'Home'
          // Se não, não faça nada
          const confirmed = true; // Substitua isso pela lógica real de confirmação
          
          if (confirmed) {
            navigation.navigate('Home');
          }
        }}
      >
        <Feather name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>
      {/* Use o componente Formik para criar o formulário */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* Use uma função para renderizar o conteúdo do formulário */}
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <>
            <Text style={styles.label}>Nome do Medicamento:</Text>
            <TextInput
              style={styles.input}
              value={values.medicationName}
              onChangeText={handleChange('medicationName')}
              onBlur={handleBlur('medicationName')}
              placeholder="Digite o nome do medicamento"
            />
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.medicationName && touched.medicationName && (
              <Text style={styles.error}>{errors.medicationName}</Text>
            )}

            <Text style={styles.label}>Dosagem:</Text>
            <TextInput
              style={styles.input}
              value={values.dosage}
              onChangeText={handleChange('dosage')}
              onBlur={handleBlur('dosage')}
              placeholder="Digite a dosagem"
            />
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.dosage && touched.dosage && <Text style={styles.error}>{errors.dosage}</Text>}

            <Text style={styles.label}>Dia:</Text>
            <TextInput
              style={styles.input}
              value={values.day}
              onChangeText={handleChange('day')}
              onBlur={handleBlur('day')}
              placeholder="Digite o dia"
            />
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.day && touched.day && <Text style={styles.error}>{errors.day}</Text>}

            <Text style={styles.label}>Hora:</Text>
            <TextInput
              style={styles.input}
              value={values.time}
              onChangeText={handleChange('time')}
              onBlur={handleBlur('time')}
              placeholder="Digite a hora"
            />
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.time && touched.time && <Text style={styles.error}>{errors.time}</Text>}

            <Text style={styles.label}>Estoque:</Text>
            <TextInput
              style={styles.input}
              value={values.stock.toString()}
              onChangeText={handleChange('stock')}
              onBlur={handleBlur('stock')}
              placeholder="Digite o estoque"
              keyboardType="numeric"
            />
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.stock && touched.stock && <Text style={styles.error}>{errors.stock}</Text>}

            <Text style={styles.label}>Enviar Imagem:</Text>
            {/* Use o componente RNPickerSelect para criar o seletor de opções da imagem */}
            <RNPickerSelect
              onValueChange={(itemValue) => handleImageOptionChange(itemValue)}
              items={[
                { label: 'Enviar Imagem', value: 'image' },
                { label: 'Enviar URL da Imagem', value: 'url' },
              ]}
              style={pickerSelectStyles} // Use um objeto de estilos para o RNPickerSelect
              placeholder={{}} // Remova o placeholder padrão
              value={selectedOption} // Use o estado selectedOption como o valor do RNPickerSelect
            />

            {selectedOption === 'url' ? (
              <TextInput
                style={styles.input}
                value={values.image}
                onChangeText={handleChange('image')}
                onBlur={handleBlur('image')}
                placeholder="Digite a URL da imagem"
                keyboardType="url"
              />
            ) : (
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handlePickImage(setFieldValue)}
                >
                  <Text style={styles.buttonText}>Escolher Imagem</Text>
                </TouchableOpacity>
                {imageSource && (
                  <Text style={styles.imageText}>Imagem selecionada: {imageSource.uri}</Text>
                )}
              </View>
            )}
            {/* Mostre uma mensagem de erro se o campo for inválido */}
            {errors.image && touched.image && <Text style={styles.error}>{errors.image}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

// Código dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: '#f00',
    fontSize: 14,
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

// Código dos estilos para o RNPickerSelect
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputAndroid: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddMedication;