import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PrevisaoItem from './componentes/PrevisaoItem';

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily";
  const apiKey = "b54e699bd9eb3326fd49815e887fd16e";

  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = endPoint + '&appid=' + apiKey;
    fetch(target)
      .then((dados => dados.json()))
      .then(dados => setPrevisoes(dados[0]));
  }

  const[cidade, setCidade] = useState('');
  const[previsoes, setPrevisoes] = useState([]);
  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style = {styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList 
        data={previsoes}
        renderItem={
          previsao => <PrevisaoItem previsao={previsao.item}></PrevisaoItem>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40
  },
  entrada: {
    flexDirection: 'column'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    marginBottom: 4,
    fontSize: 18
  },
});
