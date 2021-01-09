import React from "react";
import { StyleSheet, View,  Text,  } from "react-native";

export default function AddEstud_Titulo() {
  return (
    
      <View>
      <Text style={styles.textTitle}>AÑADIR ESTUDIANTE{"\n"}</Text>
      </View>
    
  );
}


const styles = StyleSheet.create({
      
    textTitle: {
      
      textAlign: "center",
      fontSize: 20,
      color:"green",
      fontWeight: "bold",
    }
  });