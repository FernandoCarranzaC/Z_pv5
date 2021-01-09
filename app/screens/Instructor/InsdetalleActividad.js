import React from "react";
import { View, ScrollView,StyleSheet,Text } from "react-native";
import InsActAsig_Detalle from "../../Components/Instructor/InsActivAsig/InsActAsig_Detalle";
import InsActAsig_Icono from "../../Components/Instructor/InsActivAsig/InsActAsig_Icono";
import InsActAsig_Imagen from "../../Components/Instructor/InsActivAsig/InsActAsig_Imagen";
import InsActAsig_Titulo from "../../Components/Instructor/InsActivAsig/InsActAsig_Titulo";


export default function InsdetalleActividad({route}) {
  const {idActiv,idPers }=route.params;
  return (
   <View style={styles.viewBody}>
     <InsActAsig_Titulo/>
     <InsActAsig_Icono/>
     <ScrollView>
     <InsActAsig_Detalle idActiv={idActiv} idPers={idPers}/>
     <InsActAsig_Imagen/>
     </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 150,
  }
});