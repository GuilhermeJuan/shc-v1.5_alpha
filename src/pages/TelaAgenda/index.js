import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda as Calendar } from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';

const Agenda = ({ navigation }) => {
  const [agendaItems, setAgendaItems] = useState({});
  const [isAddReminderVisible, setIsAddReminderVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const successMessageRef = useRef(null);

  const handleDayPress = (day) => {
    setIsAddReminderVisible(true);
    setSelectedDate(day.dateString);
  };

  const handleAddReminder = () => {
    // Lógica para adicionar lembrete na data selecionada (selectedDate)
    // ...

    // Exibindo a mensagem de sucesso com animação
    successMessageRef.current?.fadeIn(); // Inicia a animação

    // Após adicionar o lembrete, oculta o formulário de adição
    setIsAddReminderVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sua Agenda:</Text>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          items={agendaItems}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.time}</Text>
            </View>
          )}
          renderEmptyDate={() => <View />}
          onDayPress={handleDayPress}
        />
      </View>
      {isAddReminderVisible && (
        <View style={styles.addReminderContainer}>
          {/* Formulário de adição de lembrete (data, hora, etc.) */}
          {/* ... */}
          <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
            <Text style={styles.buttonText}>Adicionar Lembrete</Text>
          </TouchableOpacity>
        </View>
      )}
      <Animatable.View
        ref={successMessageRef}
        style={styles.successMessage}
        animation="fadeIn"
        duration={1000}
        delay={500}
      >
        <Text style={styles.successText}>Lembrete adicionado com sucesso!</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  header: {
    padding: 20,
    marginTop: 50,  // Adiciona margem ao topo do texto "Sua Agenda:"
  },
  calendarContainer: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addReminderContainer: {
    padding: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  successMessage: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});

export default Agenda;
