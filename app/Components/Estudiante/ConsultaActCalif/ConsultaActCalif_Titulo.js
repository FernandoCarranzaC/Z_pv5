import React from "react";
import { StyleSheet, Text } from "react-native";


export default function ConsultaActCalif_Titulo() {

  return (
   
    <Text style={styles.textsubTitle}>Detalle de la actvidad Cursada ...</Text>
  
  );
}
const styles = StyleSheet.create({
    textsubTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 18,
        color:"#2980B9",
        fontWeight: "bold"
      }
});