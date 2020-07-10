import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
  return (
      <Cartao estilos={estilos.cartao}>
          <View style={estilos.tela}>
            <Image 
                style={estilos.imagem}
                source={{ uri: 'https://openweathermap.org/img/wn/'+ props.previsao.current.weather[0].icon +'.png' }}
            />
            <View>
                <View style={estilos.primeiraLinha}>
                    <Text>
                        {new Date(props.previsao.current.dt * 1000).toLocaleTimeString()}-
                        {props.previsao.current.weather[0].description}
                    </Text>
                </View>
                <View style={estilos.segundaLinha}>
                    <Text style={estilos.valor}>Nascer Sol:{props.previsao.current.sunrise}</Text>
                    <Text style={estilos.valor}>Pôr Sol:{props.previsao.current.sunset}</Text>
                    <Text style={estilos.valor}>Hum:{props.previsao.current.feels_like}</Text>
                </View>
            </View>
          </View>
      </Cartao>
  )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});

export default PrevisaoItem;