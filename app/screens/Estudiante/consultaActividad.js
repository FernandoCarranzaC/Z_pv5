import React from "react";
import { View,Text, ScrollView,StyleSheet } from "react-native";
import ConsultaAct_Titulo from "../../Components/Estudiante/ConsultaAct/ConsultaAct_Titulo";
import ConsultaAct_Act from "../../Components/Estudiante/ConsultaAct/ConsultaAct_Act";

export default function constulaActivdad({route}) {
 const{idDepto}=route.params;
  return (
   <View >
     <ConsultaAct_Titulo/>
     <ConsultaAct_Act idDepto={idDepto}/>
   </View>
  );
}




