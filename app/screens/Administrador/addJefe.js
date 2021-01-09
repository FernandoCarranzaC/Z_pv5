import { StyleSheet, View, Text, TextInput,ScrollView} from "react-native";
import AddJefeD_Titulo from "../../Components/Administrador/AddJefeD/AddJefeD_Titulo";
import AddJefeD_DatosF from "../../Components/Administrador/AddJefeD/AddJefeD_DatosF";
import AddJefeD_Boton from "../../Components/Administrador/AddJefeD/AddJefeD_Boton";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { Button } from "react-native-elements";

export default function addJefe() {
  const navigation = useNavigation();
  const[txtclaveJefe, setclaveJefe] = useState('Escribe clave del Jefe')
  const[txtnombreJefe, setnombreJefe]= useState("Escribe nombre del Jefe")
  const[txtidDepto, setidDepto]= useState("Escribe id del departamento")
  const[tclav, settclav] = useState('Escribe Clave del Jefe...')
  const[tnom,settnom]= useState("Escribe Nombre de Jefe ...")
  const[tdepto,settdepto]= useState("Escribe id  de departamento...")
  return (
   <View style={styles.viewBody}>
     <AddJefeD_Titulo/>
     <ScrollView>
     <View>
      <Text style={styles.textoutput}>CLAVE JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tclav}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveJefe(c)}
       
      /> 
      <Text style={styles.textoutput}>NOMBRE JEFE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tnom}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreJefe(n)}
          
      /> 
       <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tdepto}
          placeholderTextColor = "#5DADE2"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(d)=>setidDepto(d)}   
      /> 
      </View>
      <View style={styles.viewBtn}>
      <Button
        title="Añadir Jefe"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => {
          fetch('http://192.168.1.65:3000/jefes/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                claveJefe: txtclaveJefe,
                nombreJefe: txtnombreJefe,
                idDepto: Number(txtidDepto)
              })
          }).then(()=>{ 
            settclav()
            settclav('Escribe Clave del Jefe...')
            settnom();
            settnom('Escribe nombre del Jefe...')
            settdepto();
            settdepto('Escribe id del departamento...')
            setclaveJefe('Escribe Clave del jefe')
            setnombreJefe('Escribe Nombre del jefe')
            setidDepto('Escribe id del departamento')
            
            alert('Jefe agregado'+' '+txtclaveJefe+' '+txtnombreJefe+' '+parseInt(txtidDepto))
          })
          .catch((error)=> console.error(error))
          
          
      }}
      />
      <Button
      title="Regresar Administrador"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={ () => navigation.navigate('administrador')
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
      borderColor: '#5DADE2',
      borderWidth: 1,
      color: 'blue' ,
      
   },
   btnStyle: {
    backgroundColor: "#5DADE2"
  
  },
  btnContainer: {
    width: "70%",
    marginBottom: 10
  },
  viewBtn: {
   
    alignItems: "center"
  }
    
  });