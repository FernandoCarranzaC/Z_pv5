import React from "react";
import { StyleSheet, Text } from "react-native";


export default function InsActAsig_Titulo() {

  return (
   
    <Text style={styles.textsubTitle}>Detalle de la actvidad complementaria ...</Text>
  
  );
}
const styles = StyleSheet.create({
    textsubTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 18,
        color:"#B9770E",
        fontWeight: "bold"
      }
});