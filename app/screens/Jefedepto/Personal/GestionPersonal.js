import React from "react";
import { Text,View, ScrollView,StyleSheet } from "react-native";
import GestPers_Titulo from "../../../Components/Jefedepto/GestPers/GestPers/GestPers_Titulo";
import GestPers_Boton from "../../../Components/Jefedepto/GestPers/GestPers/GestPers_Boton";
import GestPers_ListPers from "../../../Components/Jefedepto/GestPers/GestPers/GestPers_ListPers";

export default function GestionPersonal({route}) {
  const{idDepto}=route.params;
  
  return (
   <View style={styles.viewBody}>
     <GestPers_Titulo/> 
     <GestPers_Boton idDepto={idDepto} />
     <GestPers_ListPers idDepto={idDepto}/>
   </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },

});

