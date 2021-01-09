import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function jefeModificar({route}) {
  const { id, claveJefe, nombreJefe, idDepto } = route.params;
  const navigation = useNavigation();
  const[txtclaveJefe, setclaveJefe] = useState(claveJefe)
  const[txtnombreJefe,setnombreJefe]= useState(nombreJefe)
  const[txtidDepto,setidDepto]= useState(idDepto)
  const[tclav, settclav] = useState("Agrega clave de Jefe...")
  const[tnom,settnom]= useState("Agrega nombre de Jefe...")
  const[tidDepto,settidDepto]= useState("Agrega id de Departamento...")

  return (

    <View style={styles.viewBody}>
   
   <Text style={styles.textTitle}>ACTUALIZAR DATOS DE JEFE{"\n"}</Text>
   <Text> id departamento: {txtidDepto} </Text>
    <ScrollView>
    <Text style={styles.textoutput}>CLAVE JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue = {txtclaveJefe}
          placeholder = {tclav}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveJefe(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtnombreJefe}
          placeholder={tnom}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreJefe(n)}
          /> 
           <Text style={styles.textoutput}>ID DEL DEPARTAMENTO: </Text>
        <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidDepto)}
          placeholder={tidDepto}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(s)=>setidDepto(s)}
          /> 
<View style={styles.viewBtn}>
  <Button
      title="Actualizar Jefe"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch(`http://192.168.1.65:3000/jefes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                claveJefe: txtclaveJefe,
                nombreJefe: txtnombreJefe,
                idDepto: Number(txtidDepto)
            })
        }).then(() => {
          settclav()
          settclav('Escribe Clave de Jefe...')
          settnom()
          settnom('Escribe nombre de Jefes...')
          settidDepto()
          settidDepto('Escribe id del Departamento')
          setclaveJefe('Escribe clave del Jefe')
          setnombreJefe('Escribe nombre del Jefe')
          setidDepto('Escribe id del Departamento')

          alert('Jefe Actualizado'+' '+txtclaveJefe+' '+txtnombreJefe+' '+txtidDepto)
          navigation.navigate('administrador')
           
            
        });
    }}
    />
    <Button
      title="Regresar Administrador"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => navigation.navigate('administrador')
    }
    />
    </View>
    </ScrollView>
  </View>


  );
}

const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20,
    color:"blue",
    fontWeight: "bold"
  },
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
  marginBottom: 100,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 15,
    height: 40,
    borderColor: '#5DADE2',
    borderWidth: 1,
    color: 'blue' ,
    
 },  
 btnAddMaestro: {
  marginBottom: 5
 },
 btnStyle: {
   backgroundColor: "#5DADE2",

 },
 btnContainer: {
   width: "70%",
   marginBottom: 10
 },
 viewBtn: {
   
   marginTop:20,
   alignItems: "center"
 }
  
});