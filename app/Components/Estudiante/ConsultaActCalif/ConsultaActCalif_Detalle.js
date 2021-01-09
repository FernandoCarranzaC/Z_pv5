import React,{useState} from "react";
import { StyleSheet, View, Text } from "react-native";
import useFetch from '../../../hooks/useFetch'


export default function ConsultaActCalif_Detalle({idEst,idlistacalif,idactividadgrupo}) {
  
  const {loading1, data: estudiante} = useFetch(`http://192.168.1.65:3000/estudiantes/${Number(idEst)}`)
  const {loading2, data: listacalif} = useFetch(`http://192.168.1.65:3000/listacalifs/${Number(idlistacalif)}`)
  const {loading3, data: listasist} = useFetch(`http://192.168.1.65:3000/listaasist/${Number(idlistacalif)}`)
  const {loading4, data: actividades} = useFetch(`http://192.168.1.65:3000/actividadgrupos/${Number(idactividadgrupo)}`)
  
  
  return (
    
    <View>
      <Text style={styles.textbody}>  No. Control: {estudiante.numControl} </Text>
      <Text style={styles.textbody}>  NOMBRE: {estudiante.nombreEst} </Text>
      <Text style={styles.textbody}>  CARRERA: {estudiante.carreraEst} </Text>
      <Text style={styles.textbody}>  ACTIVIDAD: {actividades.nombreAct}</Text>
      <Text style={styles.textbody}>  ID INSTRUCTOR: {actividades.idPers}</Text>
      <Text style={styles.textbody}>  NOM INSTRUCTOR: {listacalif.nombrePers}</Text>
      <Text style={styles.textbody}>  HORARIO: {actividades.horarioAct} </Text>
      <Text style={styles.textbody}>  PERIODO: {actividades.periodoAct} </Text>
      <Text style={styles.textbody}>  STATUS ASISTENCIAS: {listasist.asistEst} </Text>
      <Text style={styles.textbody}>  CALIFICACIÓN: {listacalif.califEst} </Text>
    </View>
   

  );
}


const styles = StyleSheet.create({
   textbody:{
    fontSize: 14,
    color:"black",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  } 
});