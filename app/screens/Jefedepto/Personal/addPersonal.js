import { StyleSheet, View, Text, TextInput,ScrollView} from "react-native";
import AddPers_Titulo from "../../../Components/Jefedepto/AddPers/AddPers_Titulo";
import AddPers_Datos from "../../../Components/Jefedepto/AddPers/AddPers_Datos";
import AddPers_Boton from "../../../Components/Jefedepto/AddPers/AddPers_Boton";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { Button } from "react-native-elements";

export default function addPersonal({route}) {
  const{idDepto}=route.params;
  const navigation = useNavigation();
  const[txtclavePersonal, setclavePersonal] = useState('Escribe clave del Personal')
  const[txtnombrePersonal, setnombrePersonal]= useState("Escribe nombre del Personal")
  const[txtidDepto, setidDepto]= useState(idDepto)
  const[tclav, settclav] = useState('Proporciona el número de tarjeta...')
  const[tnom,settnom]= useState("Proporciona nombre del personal...")
  const[tdepto,settdepto]= useState("ID del departamento a que pertenece...")
  return (
   <View style={styles.viewBody}>
     <AddPers_Titulo/>
     <ScrollView>
     <View>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tclav}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclavePersonal(c)}
      
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL PERSONAL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tnom}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombrePersonal(n)}
   
      /> 
       <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
       <Text style={styles.textinfo}>{txtidDepto}</Text>
    {/*   <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidDepto)}
          placeholder = {tdepto}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(d)=>setidDepto(d)}   
      />   
  */}
      </View>
      <View style={styles.viewBtn}>
      <Button
        title="Añadir Personal"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => {
          fetch('http://192.168.1.65:3000/personals/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                clavePers: txtclavePersonal,
                nombrePers: txtnombrePersonal,
                idDepto: Number(txtidDepto)
              })
          }).then(()=>{ 
            settclav()
            settclav('Proporciona el número de tarjeta...')
            settnom();
            settnom('Proporciona nombre del personal...')
            settdepto();
            settdepto('ID del departamento a que pertenece...')
            setclavePersonal('Escribe clave del Personal')
            setnombrePersonal('Escribe nombre del Personal')
           // setidDepto('Escribe id del departamento') (idDepto)
            
            alert('Personal agregado'+' '+txtclavePersonal+' '+txtnombrePersonal+' '+parseInt(txtidDepto))
          })
          .catch((error)=> console.error(error))
          
          
      }}
      />
      <Button
      title="Regresar Jefe departamental"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={ () => navigation.navigate('jefe-ingreso')
    }
    />
      </View>
     </ScrollView>
   </View>
   
  );
}


const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
    marginBottom: 100,
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
   },
   textinfo: {
    margin: 15,
    height: 40,
    borderColor: 'lime',
    borderWidth: 1,
    color: 'green' ,
    textAlignVertical: "center",     
 },
    btnStyle: {
      backgroundColor: "#48C9B0" 
    },
    btnContainer: {
      width: "70%",
      marginBottom: 10
    },
    viewBtn: {
     
      alignItems: "center"
    }
    
  });