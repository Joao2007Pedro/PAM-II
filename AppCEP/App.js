import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
 
export default function App() {
  const [cep, setCep] = useState('');
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [numero, setNumero] = useState(''); // número da casa
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');
 
  const buscarEndereco = async () => {
    const cleanCep = cep.replace(/\D/g, '');
 
    if (cleanCep.length !== 8) {
      setErro('CEP inválido. Digite 8 números.');
      setEndereco(null);
      return;
    }
 
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (response.data.erro) {
        setErro('CEP não encontrado');
        setEndereco(null);
      } else {
        setEndereco(response.data);
        setErro('');
        Keyboard.dismiss();
      }
    } catch (error) {
      setErro('Ocorreu um erro na consulta.');
      setEndereco(null);
    }
  };
 
  return (
      <View style={styles.container}>
        <Text style={styles.titCep}>Exemplo com CEP</Text>
 
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}

        />
 
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (dd/mm/aaaa)"
          value={nascimento}
          onChangeText={setNascimento}
        />
 
        <TextInput
          style={styles.input}
          placeholder="Estado civil"
          value={estadoCivil}
          onChangeText={setEstadoCivil}
        />
 
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
 
        <TextInput
          style={styles.input}
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
        />
 
        <Button title="Buscar Endereço" onPress={buscarEndereco} />
 
        {erro && <Text style={styles.error}>{erro}</Text>}
 
        {endereco && (
          <View style={styles.result}>
            <Text><Text style={styles.label}>Nome:</Text> {nome}</Text>
            <Text><Text style={styles.label}>Nascimento:</Text> {nascimento}</Text>
            <Text><Text style={styles.label}>Estado civil:</Text> {estadoCivil}</Text>
            <Text><Text style={styles.label}>Rua:</Text> {endereco.logradouro}</Text>
            <Text><Text style={styles.label}>Número:</Text> {numero}</Text>
            <Text><Text style={styles.label}>Bairro:</Text> {endereco.bairro}</Text>
            <Text><Text style={styles.label}>Cidade:</Text> {endereco.localidade}</Text>
            <Text><Text style={styles.label}>Estado:</Text> {endereco.uf}</Text>
          </View>
        )}
      </View>
  );
}
 
const styles = StyleSheet.create({
  titCep: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgba(190, 30, 30, 1)',
    margin: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold'
  }
});
