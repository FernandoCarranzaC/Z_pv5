import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

export default function DetDeptoDatos({ loading, id, claveDepto, nombreDepto,subdireccionDepto}) {
    return (
    
            <View>
            {loading ? <Text>Cargando ...</Text> :
                <>
                    <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
                    <Text style={styles.textinfo}>{id}</Text>
                    <Text style={styles.textoutput}>CLAVE DEPARTAMENTO: </Text>
                    <Text style={styles.textinfo}>{claveDepto}</Text>
                    <Text style={styles.textoutput}>NOMBRE DEPARTAMENTO: </Text>
                    <Text style={styles.textinfo}>{nombreDepto}</Text>
                    <Text style={styles.textoutput}>NOMBRE SUBDIRECCION: </Text>
                    <Text style={styles.textinfo}>{subdireccionDepto}</Text>
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