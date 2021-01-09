import React,{useState} from "react";
import { StyleSheet,View, Text,TextInput} from "react-native";
import Jefedepto_Titulo from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Titulo";
import Jefedepto_Imagen from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Imagen";
import Jefedepto_Menu from "../../../Components/Jefedepto/Jefedepto/Jefedepto_Menu";
import { ScrollView } from "react-native-gesture-handler";
import Jefe_BotonIngreso from "../../../Components/Jefedepto/Jefedepto/Jefe_BotonIngreso";

export default function Jefedepto() {
  const[txtclaveJefe, setclaveJefe]= useState('Escribe clave de Jefe')
  const[ttclaveJefe, ssetclaveJefe]= useState('Escribe clave de Jefe...')
  return(
    <View>
      <Jefedepto_Titulo/>
      <ScrollView>
      <Jefedepto_Imagen/>
      <View style={styles.viewBody}>
      <Text style={styles.textoutput}>CLAVE JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {ttclaveJefe}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveJefe(c)} 
      /> 
      </View>
      <Jefe_BotonIngreso claveJefe={txtclaveJefe}/>
      </ScrollView>     
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
    borderColor: 'lime',
    borderWidth: 1,
    color: 'green' ,
    
 }
  
});
