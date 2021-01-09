import React,{useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import useFetch from '../../../hooks/useFetch'


export default function InsActAsig_Detalle({idActiv,idPers}) {

  const {loading, data: actividades} = useFetch(`http://192.168.1.65:3000/actividadgrupos/${Number(idActiv)}`)
  const {loading2, data: instructor} = useFetch(`http://192.168.1.65:3000/personals/${Number(idPers)}`)
  
  return (
    
    <View>
      <Text style={styles.textbody}>  ID actividad: {idActiv} </Text>
      <Text style={styles.textbody}>  Actividad: {actividades.nombreAct}</Text>
      <Text style={styles.textbody}>  ID Instructor: {actividades.idPers}</Text>
      <Text style={styles.textbody}>  Instructor: {instructor.nombrePers} </Text>
      <Text style={styles.textbody}>  Fecha de Impartición: {actividades.periodoAct} </Text>
      <Text style={styles.textbody}>  Horario: {actividades.horarioAct} </Text> 
    </View>
   

  );
}


const styles = StyleSheet.create({
   textbody:{
    fontSize: 14,
    color:"#A04000",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  } 
});