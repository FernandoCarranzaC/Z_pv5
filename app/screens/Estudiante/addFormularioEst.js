
import React from "react";
import { View, ScrollView,StyleSheet,Text } from "react-native";
import AddFormTitulo from "../../Components/Estudiante/Formulario/addFormTitulo";
import AddFormDatosE from "../../Components/Estudiante/Formulario/addFormDatosE";
import AddFormBoton from "../../Components/Estudiante/Formulario/addFormBoton";

export default function addFormularioEst({route}) {
  const{idActiv,idPers, idEst}=route.params;
 
  return(
    
      <View  style={styles.viewBody}>
      <AddFormTitulo/>
      <ScrollView >    
      <AddFormDatosE route={route}/>
      <AddFormBoton route={route}/>
       </ScrollView>
      </View>

   
    );
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 80,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 10,
    height: 10,
    borderColor: '#5DADE2',
    borderWidth: 1,
    color: '#2980B9' ,
   
 }
});