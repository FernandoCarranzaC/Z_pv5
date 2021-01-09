import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetActivDatos({ loading, data}) {
    
  return (
    
            <View>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID ACTIVIDAD: </Text>
                    <Text style={styles.textinfo}>{data.id}</Text>
                    <Text style={styles.textoutput}>CLAVE GRUPO: </Text>
                    <Text style={styles.textinfo}>{data.claveGrpo}</Text>
                    <Text style={styles.textoutput}>ID CATEGORIA: </Text>
                    <Text style={styles.textinfo}>{data.idCat}</Text>
                    <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
                    <Text style={styles.textinfo}>{data.idDepto}</Text>
                    <Text style={styles.textoutput}>NOMBRE DE ACTIVIDAD: </Text>
                    <Text style={styles.textinfo}>{data.nombreAct}</Text>
                    <Text style={styles.textoutput}>ID DE INSTRUCTOR: </Text>
                    <Text style={styles.textinfo}>{data.idPers}</Text>
                    <Text style={styles.textoutput}>HORARIO DE ACTIVIDADES: </Text>
                    <Text style={styles.textinfo}>{data.horarioAct}</Text>
                    <Text style={styles.textoutput}>PERIODO DE ACTIVIDADES: </Text>
                    <Text style={styles.textinfo}>{data.periodoAct}</Text>
                    <Text style={styles.textoutput}>TIPO DE APERTURA: </Text>
                    <Text style={styles.textinfo}>{data.aperturaAct}</Text>
                </>
            }   
            </View>

    )
}

const styles = StyleSheet.create({
 
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
      marginBottom: 10,
      },
      textoutput:{
        fontWeight: "bold",
      },
      textinfo: {
        margin: 15,
        height: 40,
        borderColor: 'lime',
        borderWidth: 1,
        color: 'green' ,
        textAlignVertical: "center",
            
     },
})