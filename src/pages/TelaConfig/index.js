import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TelaConfigurcao = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Section title="Perfil do Usuário">
        <SettingItem label="Atualizar Informações Pessoais" icon="account" onPress={() => {}} />
        <SettingItem label="Logoff" icon="logout" onPress={() => {}} />
        <SettingItem label="Excluir Conta" icon="delete" onPress={() => {}} />
      </Section>

      <Section title="Preferências do Aplicativo">
        <SettingItem label="Configurações de Notificação" icon="bell" onPress={() => navigation.navigate('AddMedication')} />
        <SettingItem label="Temas" icon="theme-light-dark" onPress={() => {}} />
      </Section>

      <Section title="Configurações de Privacidade e Segurança">
        <SettingItem label="Controles de Privacidade" icon="shield" onPress={() => {}} />
        <SettingItem label="Configurações de Senha" icon="key-change" onPress={() => {}} />
      </Section>

      <Section title="Idioma e Localização">
        <SettingItem label="Idioma do Aplicativo" icon="earth" onPress={() => {}} />
        <SettingItem label="Configurações de Localização" icon="map-marker" onPress={() => {}} />
      </Section>

      <Section title="Notificações">
        <SettingItem label="Configurações de Notificações" icon="bell-outline" onPress={() => {}} />
      </Section>

      <Section title="Sobre o Aplicativo">
        <SettingItem label="Versão do Aplicativo" icon="information" onPress={() => {}} />
        <SettingItem label="Termos de Serviço" icon="file-document" onPress={() => {}} />
      </Section>

      <Section title="Feedback e Ajuda">
        <SettingItem label="Enviar Feedback" icon="comment-processing-outline" onPress={() => {}} />
        <SettingItem label="Suporte e FAQs" icon="help-circle-outline" onPress={() => {}} />
      </Section>

      <Section title="Atualizações Automáticas">
        <SettingItem label="Habilitar Atualizações Automáticas" icon="arrow-up-bold" onPress={() => {}} />
      </Section>

      <Section title="Conexões com Redes Sociais">
        <SettingItem label="Gerenciar Conexões" icon="account-box-outline" onPress={() => {}} />
      </Section>

      <Section title="Configurações Avançadas">
        <SettingItem label="Opções Avançadas" icon="cogs" onPress={() => {}} />
      </Section>

      {/* Botão para voltar para a tela "Home" */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#0b203d" />
        <Text style={styles.backLabel}>Voltar para a Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const SettingItem = ({ label, icon, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={24} color="#0b203d" />
    <Text style={styles.settingLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0b203d',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  // Estilos para o botão de voltar
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0b203d',
  },
});

export default TelaConfigurcao;
