import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function GerenciamentoMedicamentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMedication')}>
          <FontAwesome5 name="plus" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Adicionar Remédio</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditMedication')}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Editar Medicamento</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.navigate('DeleteMedication')}>
          <MaterialIcons name="delete" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Deletar Medicamento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', // Cor de fundo alterada
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 5, // Sombra adicionada
  },
  editButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 5, // Sombra adicionada
  },
  deleteButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    elevation: 5, // Sombra adicionada
  },
  buttonText: {
    fontSize: 16,
    color: '#2c3e50', // Cor do texto alterada
  },
});