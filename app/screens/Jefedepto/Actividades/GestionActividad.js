import React from "react";
import { Text,View, ScrollView,StyleSheet } from "react-native";
import GestActs_Titulo from "../../../Components/Jefedepto/GestActs/GestActs/GestActs_Titulo";
import GestActs_Boton from "../../../Components/Jefedepto/GestActs/GestActs/GestActs_Boton";
import GestActs_ListActs from "../../../Components/Jefedepto/GestActs/GestActs/GestActs_ListActs";

export default function GestionActividad({route}) {
  const{idDepto}=route.params;

  return (
   <View style={styles.viewBody}>
     <GestActs_Titulo/> 
     <GestActs_Boton idDepto={idDepto}/>
    <GestActs_ListActs idDepto={idDepto}/>
   
   </View>
  );
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },

});