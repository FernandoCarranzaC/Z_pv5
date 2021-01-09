import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import AC_Titulo from "../../Components/Estudiante/ActividadCursada/AC_Titulo";
import AC_Actividades from "../../Components/Estudiante/ActividadCursada/AC_Actividades";

export default function actividadCursada({route}) {
  const {idEst }=route.params;
  return (
    <View style={styles.viewBody}>
      <AC_Titulo/>
      <ScrollView>
        <AC_Actividades idEst={idEst}/>
      </ScrollView>
    </View>


  );}

  const styles = StyleSheet.create({
  
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
      marginBottom: 150,
    }
  });