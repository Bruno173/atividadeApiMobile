import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Api from './Api';

export default function horarios() {



  const [dadosHorarios,setdadosHorarios] = useState([]);

  async function getHorarios(){
    try{
      const resultado = await Api.get(`/iemHorarios`);
      return resultado.data
    }catch(error){
      console.log(error)
      return[]
    }
  }
    useEffect(async() => {
      const resp = await getHorarios()
      setdadosHorarios(resp);
    },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Horarios</Text>

      <FlatList
        style={styles.lista}
        data={dadosHorarios}
        keyExtractor={dadosHorarios => dadosHorarios.id}
        renderItem={({ item }) =>
          
            
              <View style={styles.horarios}>
              <Text style={styles.textoBotaoValor}>Jogo {item.id}</Text>
              <Text style={styles.textoBotaoFruta}>{item.time1}</Text>
              <Text style={styles.textoBotaoValor}>X</Text>
              <Text style={styles.textoBotaoValor}>{item.time2}</Text>
              <Text style={styles.textoBotaoValor}>Dia:{item.data}</Text>
              <Text style={styles.textoBotaoValor}>{item.hora}</Text>
              <Text style={styles.textoBotaoValor}>{item.tipo}</Text>
              <Text style={styles.textoBotaoValor}>{item.rodada}</Text>

              </View>
            
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:30,
  },
  lista:{
    width:300
  },
  grupoFrutas:{

  },
  botaoFrutas:{

  },
  textoBotaoFruta:{

  },
  textoBotaoValor:{

  }
});