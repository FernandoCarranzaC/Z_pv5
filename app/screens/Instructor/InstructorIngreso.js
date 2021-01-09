import React,{useState} from "react";
import {StyleSheet, View, TouchableOpacity } from "react-native";
import Instructor_Titulo from "../../Components/Instructor/Instructor/Instructor_Titulo";
import Instructor_Imagen from "../../Components/Instructor/Instructor/Instructor_Imagen";
import Instructor_Menu from "../../Components/Instructor/Instructor/Instructor_Menu";
import useFetch from '../../hooks/useFetch'
import { ListItem,Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function InstructorIngreso({route}) {
  const{clavePers}=route.params;
  const {loading, data: personal} = 
  useFetch(`http://192.168.1.65:3000/personals?filter[where][clavePers]=${clavePers}`)
  const [txtidPers, setidPers]= useState("Escribe ID de personal")

  return(
    <View>
      <Instructor_Titulo/>
      <View style={styles.viewBody}>
      <ScrollView  >
      {personal.map((item, i) => (
      
       <TouchableOpacity onPress = {
           () => {
                  setidPers(item.id)
        }}>
       <ListItem key={i} bottomDivider>
          <Icon name={"account-outline"} type="material-community" />
         
          <ListItem.Content>
          <ListItem.Title>ID: {item.id}</ListItem.Title>
          <ListItem.Title>NO. TARJETA: {item.clavePers}</ListItem.Title>
          <ListItem.Title>NOMBRE: {item.nombrePers}</ListItem.Title>
          <ListItem.Title>ID DEPTO: {item.idDepto}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
      ))}
      </ScrollView>  
     
      </View> 
      <Instructor_Menu idPers={txtidPers}/>
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