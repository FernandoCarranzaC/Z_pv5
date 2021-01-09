import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetPersDatos({ loading, id, clavePers, nombrePers,idDepto}) {
    return (
    
            <View>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID DE PERSONAL: </Text>
                    <Text style={styles.textinfo}>{id}</Text>
                    <Text style={styles.textoutput}>CLAVE DE PERSONAL: </Text>
                    <Text style={styles.textinfo}>{clavePers}</Text>
                    <Text style={styles.textoutput}>NOMBRE DE PERSONAL: </Text>
                    <Text style={styles.textinfo}>{nombrePers}</Text>
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