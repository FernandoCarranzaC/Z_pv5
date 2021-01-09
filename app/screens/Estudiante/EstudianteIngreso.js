import React,{useState} from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from "react-native";
import Estudiante_Titulo from "../../Components/Estudiante/Estudiante/Estudiante_Titulo";
import Estudiante_Imagen from "../../Components/Estudiante/Estudiante/Estudiante_Imagen";
import Estudiante_Menu from "../../Components/Estudiante/Estudiante/Estudiante_Menu";

import useFetch from '../../hooks/useFetch'
import { ListItem,Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function EstudianteIngreso({route}) {

  const{numControl}=route.params;
  const {loading, data: estudiante} = 
  useFetch(`http://192.168.1.65:3000/estudiantes?filter[where][numControl]=${numControl}`)

  const[txtidDepto, setidDepto]= useState("Escribe ID del departamento")
  const[txtidEst, setidEst]= useState("Escribe ID  del Estudiante")
  
 return(
    <View>
      <Estudiante_Titulo/>
      <View style={styles.viewBody}>
      <ScrollView  >
      {estudiante.map((item, i) => (
      
       <TouchableOpacity onPress = {() => {setidDepto(item.idDepto); setidEst(item.id)}}>
       <ListItem key={i} bottomDivider>
          <Icon name={"face-outline"} type="material-community" />
         
          <ListItem.Content>
          <ListItem.Title>ID: {item.id}</ListItem.Title>
          <ListItem.Title>NC: {item.numControl}</ListItem.Title>
          <ListItem.Title>NOMBRE: {item.nombreEst}</ListItem.Title>
          <ListItem.Title>CARRERA: {item.carreraEst}</ListItem.Title>
          <ListItem.Title>ID DEPTO: {item.idDepto}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
      ))}
      </ScrollView>   
      </View> 
      <Estudiante_Menu idEst={txtidEst} idDepto={txtidDepto}/>
    </View>

   
    );
}
const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
    marginBottom: 20,
    },
    textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: '#2980B9' ,
      
   }
    
  });