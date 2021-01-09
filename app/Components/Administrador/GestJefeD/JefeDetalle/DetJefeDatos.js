import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetJefeDatos({ loading, id, claveJefe, nombreJefe,idDepto}) {
    return (
    
            <View>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID JEFE: </Text>
                    <Text style={styles.textinfo}>{id}</Text>
                    <Text style={styles.textoutput}>CLAVE JEFE: </Text>
                    <Text style={styles.textinfo}>{claveJefe}</Text>
                    <Text style={styles.textoutput}>NOMBRE DE JEFE: </Text>
                    <Text style={styles.textinfo}>{nombreJefe}</Text>
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
        borderColor: '#5DADE2',
        borderWidth: 1,
        color: 'blue' ,
        textAlignVertical: "center",
            
     },
})