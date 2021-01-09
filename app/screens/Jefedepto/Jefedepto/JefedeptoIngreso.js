import React,{useState} from "react";
import { StyleSheet,View, Text,TextInput} from "react-native";
import Jefedepto_Titulo from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Titulo";
import Jefedepto_Imagen from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Imagen";
import Jefedepto_Menu from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Menu";
import useFetch from '../../../hooks/useFetch'
import { ListItem,Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function JefedeptoIngreso({route}) {
  const{claveJefe}=route.params;
  const {loading, data: jefe} = 
  useFetch(`http://192.168.1.65:3000/jefes?filter[where][claveJefe]=${claveJefe}`)
  //const [txtidPers, setidPers]= useState("Escribe ID de personal")
  const [txtidDepto, setidDepto]= useState("Escribe ID de Departamento")

  return(
    <View>
      <Jefedepto_Titulo/>
      <View style={styles.viewBody}>
      <ScrollView  >
      {jefe.map((item, i) => (
      
       <TouchableOpacity onPress = {
           () => {//setidPers(item.id)
                  setidDepto(item.idDepto)
        }}>
       <ListItem key={i} bottomDivider>
          <Icon name={"account-outline"} type="material-community" />
         
          <ListItem.Content>
          <ListItem.Title>ID: {item.id}</ListItem.Title>
          <ListItem.Title>NO. TARJETA: {item.claveJefe}</ListItem.Title>
          <ListItem.Title>NOMBRE: {item.nombreJefe}</ListItem.Title>
          <ListItem.Title>ID DEPTO: {item.idDepto}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
         
          </TouchableOpacity>
          
      ))}
      </ScrollView>  

      </View> 
      <Jefedepto_Menu idDepto={txtidDepto}/>   
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
    borderColor: '#D4AC0D',
    borderWidth: 1,
    color: '#B9770E' ,
    
 }
  
});