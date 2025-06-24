import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Tabela from './mkdir components/Tabela';

export default function App() {
  const headers = ['Nome', 'Idade', 'Cidade'];
  const data = [
    ['Maria', '28', 'São Paulo'],
    ['João', '35', 'Rio de Janeiro'],
    ['Ana', '22', 'Belo Horizonte'],
    ['Carlos', '40', 'Curitiba'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tabela de Pessoas</Text>
      <Tabela headers={headers} data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 15,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
});
