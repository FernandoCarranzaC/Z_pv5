import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetEstudDatos({ loading, id, numControl, nombreEst, carreraEst, idDepto}) {
    return (
    
            <View>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID DE ESTDUDIANTE: </Text>
                    <Text style={styles.textinfo}>{id}</Text>
                    <Text style={styles.textoutput}>NO. CONTROL: </Text>
                    <Text style={styles.textinfo}>{numControl}</Text>
                    <Text style={styles.textoutput}>NOMBRE DEL ESTUDIANTE: </Text>
                    <Text style={styles.textinfo}>{nombreEst}</Text>
                    <Text style={styles.textoutput}>CARRERA DEL ESTUDIANTE: </Text>
                    <Text style={styles.textinfo}>{carreraEst}</Text>
                    <Text style={styles.textoutput}>ID DE DEPARTAMENTO: </Text>
                    <Text style={styles.textinfo}>{idDepto}</Text>
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