import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

           
export default function DetActivBotones({loading,data}) {
 
    const navigation = useNavigation();
  
    return (
               <View style={styles.viewBtn}>
                    <Button
                    title="Eliminar Actividad"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => {
                        fetch(`http://192.168.1.65:3000/actividadgrupos/${data.id}`, {
                            method: 'DELETE'
                        
                        }).then(() => {
                            alert('Actividad Eliminada')
                            navigation.navigate('jefe-ingreso')
                        })
                    }}
                     />
                    <Button
                     title="Modificar Actividad"
                     buttonStyle={styles.btnStyle}
                     containerStyle={styles.btnContainer}
                     onPress ={() => navigation.navigate('actividad-modificar',{data:data})}
                     
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