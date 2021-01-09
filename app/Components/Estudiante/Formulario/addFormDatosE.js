import React from "react";
import { StyleSheet, View, ScrollView, Text,Alert } from "react-native";
import {Input, Button } from "react-native-elements";
import useFetch from "../../../hooks/useFetch";



export default function addFormDatosE({route}) {
  const{idActiv,idPers, idEst}=route.params;
  const{loading1,data: actividad}= useFetch(`http://192.168.1.65:3000/actividadgrupos/${idActiv}`)
  const{loading2,data: personal}= useFetch(`http://192.168.1.65:3000/personals/${idPers}`)
  const{loading3,data: estudiante}= useFetch(`http://192.168.1.65:3000/estudiantes/${idEst}`)
  return (
            
    <View >
      <Text style={styles.textoutput}>No. Contro:</Text>
      <Text style={styles.textinfo}>{estudiante.numControl}</Text>  
      <Text style={styles.textoutput}>NOMBRE ESTUDIANTE:</Text>
      <Text style={styles.textinfo}>{estudiante.nombreEst}</Text> 
      <Text style={styles.textoutput}>CARRERA:</Text>
      <Text style={styles.textinfo}>{estudiante.carreraEst}</Text>
      <Text style={styles.textoutput}>INSTRUCTOR:</Text>
      <Text style={styles.textinfo}>{personal.nombrePers}</Text>
      <Text style={styles.textoutput}>CLAVE GRUPO:</Text>
      <Text style={styles.textinfo}>{actividad.claveGrpo}</Text>
      <Text style={styles.textoutput}>ACTIVIDAD:</Text>
      <Text style={styles.textinfo}>{actividad.nombreAct}</Text>
      <Text style={styles.textoutput}>HORARIO DE ACTIVIDAD:</Text>
      <Text style={styles.textinfo}>{actividad.horarioAct}</Text>
      <Text style={styles.textoutput}>HORARIO DE PERIODO:</Text>
      <Text style={styles.textinfo}>{actividad.periodoAct}</Text>
        </View>
  );
}

const showAlert = () =>{
    Alert.alert(
       'Estudiante rgistrado...'
    )
  }

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textoutput:{
      fontWeight: "bold",
    },
    input: { 
      margin: 10,
      height: 10,
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: '#2980B9' 
    },
    textinfo:
      { margin: 15,
        height: 40,
        borderColor: '#5DADE2',
        borderWidth: 1,
        color:'#1F618D',
        //color:'#5DADE2',
        //color: '#2980B9',
        textAlignVertical: 'center',
        fontWeight: "bold",
      }
  });