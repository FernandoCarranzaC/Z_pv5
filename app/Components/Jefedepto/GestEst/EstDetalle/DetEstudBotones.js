import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

           
export default function DetEstudBotones({id, numControl, nombreEst, carreraEst, idDepto  }) {
 
    const navigation = useNavigation();
  
    return (
               <View style={styles.viewBtn}>
                    <Button
                    title="Eliminar Estudiante"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.1.65:3000/estudiantes/${id}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Estudiante Eliminado')
                            navigation.navigate('jefe-ingreso')
                        })
                    }}
                     />
                    <Button
                     title="Modificar Estudiante"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress ={() => navigation.navigate('estudiante-modificar',{id: id, numControl: numControl, nombreEst: nombreEst, carreraEst:carreraEst, idDepto: idDepto})}
                     
                     />
                     <Button
                     title="Regresar Jefe Depto."
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress={() => navigation.navigate('jefe-ingreso')}
                     />
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
      btnContainer: {
        width: "70%",
        marginBottom: 15
      },
      btnStyle: {
        backgroundColor: "#48C9B0",
     
      },
      viewBtn: {
   
        marginTop:10,
        alignItems: "center"
      },
      textinfo: {
        margin: 15,
        height: 40,
        borderColor: '#F1C40F',
        borderWidth: 1,
        color: 'maroon' ,
        textAlignVertical: "center",
            
     },
})