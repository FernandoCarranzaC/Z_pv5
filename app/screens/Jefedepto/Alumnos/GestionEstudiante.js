import React from "react";
import { Text,View, ScrollView,StyleSheet } from "react-native";
import GestEstud_Titulo from "../../../Components/Jefedepto/GestEst/GestEst/GestEstud_Titulo";
import GestEstud_ListEstuds from "../../../Components/Jefedepto/GestEst/GestEst/GestEstud_ListEstuds";
import GestEstud_Boton from "../../../Components/Jefedepto/GestEst/GestEst/GestEstud_Boton";

export default function GestionEstudiante({route}) {
  const{idDepto}=route.params;

  return (
   <View style={styles.viewBody}>
     <GestEstud_Titulo/> 
     <Text>{idDepto}</Text>
     <GestEstud_Boton idDepto={idDepto} />
     <GestEstud_ListEstuds idDepto={idDepto} />
   </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },

});