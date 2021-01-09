import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput, Alert } from "react-native";
import { Button, ListItem, Icon,Input } from "react-native-elements";
import useFetch from "../../../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";

export default function addFormBoton({route}) {
  const{idActiv,idPers, idEst}=route.params;
  const{loading1,data: actividad}= useFetch(`http://192.168.1.65:3000/actividadgrupos/${idActiv}`)
  const{loading2,data: personal}= useFetch(`http://192.168.1.65:3000/personals/${idPers}`)
  const{loading3,data: estudiante}= useFetch(`http://192.168.1.65:3000/estudiantes/${idEst}`)
  const[txtcalif,setcalif]=useState(0)
  const navigation = useNavigation();

  return (
  
      <View style={styles.viewBtn}>
        
        <Button
          title="Registrarse en actividad"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => {
            fetch('http://192.168.1.65:3000/listacalifs/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  numControl: estudiante.numControl,
                  idEst: Number(estudiante.id),
                  nombreEst:estudiante.nombreEst,
                  idGrpo: Number(actividad.id),
                  nombrePers:personal.nombrePers,
                  nombreAct:actividad.nombreAct,
                  califEst: "Calificación sin Registrar"
                })
            }).then(()=>{             
              alert(estudiante.nombreEst+' '+'Registrado en Actividad'+' '+actividad.nombreAct)

              fetch('http://192.168.1.65:3000/listaasist/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  numControl: estudiante.numControl,
                  idEst: Number(estudiante.id),
                  nombreEst:estudiante.nombreEst,
                  idGrpo: Number(actividad.id),
                  nombrePers:personal.nombrePers,
                  nombreAct:actividad.nombreAct,       
                  asistEst: txtcalif
                })
            }).then(()=>{ navigation.navigate('estudiante-ingreso')           
                           
            }) .catch((error)=> console.error(error))

            })
            .catch((error)=> console.error(error))
            
            
        }}
        />
        </View>
   
  );
}


var clave,nombreJefe,departamento



const showAlert = () =>{
  Alert.alert(
     'Estudiante Añadido...'+clave
  )
}


const styles = StyleSheet.create({
  
    btnStyle: {
      backgroundColor: "#00BCD4"
    },
    btnContainer: {
      width: "70%"
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
      marginBottom: 10,
    marginTop: 0,
    }
  });
