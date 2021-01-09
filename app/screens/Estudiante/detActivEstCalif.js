import React from "react";
import { View, ScrollView,StyleSheet,Text } from "react-native";
import ConsultaActCalif_Detalle from "../../Components/Estudiante/ConsultaActCalif/ConsultaActCalif_Detalle";
import ConsultaActCalif_Icono from "../../Components/Estudiante/ConsultaActCalif/ConsultaActCalif_Icono";
import ConsultaActCalif_Imagen from "../../Components/Estudiante/ConsultaActCalif/ConsultaActCalif_Imagen";
import ConsultaActCalif_Titulo from "../../Components/Estudiante/ConsultaActCalif/ConsultaActCalif_Titulo";

import useFetch from "../../hooks/useFetch"


export default function detActivEstCalif({route}) {
  const {idEst,idlistacalif,idactividadgrupo }=route.params;
  return (
   <View style={styles.viewBody}>
     <ConsultaActCalif_Titulo/>
     <ConsultaActCalif_Icono/>
     <ScrollView>
     <ConsultaActCalif_Detalle idEst={idEst} idlistacalif={idlistacalif} idactividadgrupo={idactividadgrupo} />
     <ConsultaActCalif_Imagen/>
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