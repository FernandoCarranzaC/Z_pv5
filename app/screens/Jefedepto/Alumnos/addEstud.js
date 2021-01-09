import { StyleSheet, View, Text, TextInput,ScrollView} from "react-native";
import AddEstud_Titulo from "../../../Components/Jefedepto/AddEstud/AddEstud_Titulo";
import AddEstud_Datos from "../../../Components/Jefedepto/AddEstud/AddEstud_Datos";
import AddEstud_Boton from "../../../Components/Jefedepto/AddEstud/AddEstud_Boton";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { Button } from "react-native-elements";

export default function addEstud({route}) {
  const{idDepto}=route.params;
  const navigation = useNavigation();
  const[txtclaveEstudiante, setclaveEstudiante] = useState('Escribe Numero de Control')
  const[txtnombreEstudiante, setnombreEstudiante]= useState("Escribe nombre del Estudiante")
  const[txtcarreraEstudiante, setcarreraEstudiante]= useState("Escribe carrera del Estudiante")  
  const[txtidDepto, setidDepto]= useState(idDepto)
  const[tclav, settclav] = useState('Proporciona el número de Control...')
  const[tnom,settnom]= useState("Proporciona nombre del Estudiante...")
  const[tcarr,settcarr]= useState("Proporciona carrera del Estudiante...")
  const[tdepto,settdepto]= useState("ID del departamento a que pertenece...")
  return (
    <View style={styles.viewBody}>
      <AddEstud_Titulo/>
      <ScrollView>
      <View>
      <Text style={styles.textoutput}>NO. CONTROL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tclav}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveEstudiante(c)} 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tnom}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreEstudiante(n)}
      /> 
      <Text style={styles.textoutput}>CARRERA DEL ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {tcarr}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setcarreraEstudiante(c)}
      /> 
       <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
       <Text style={styles.textinfo}>{txtidDepto}</Text>
    {/*}   <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
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
        title="Añadir Estudiante"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => {
          fetch('http://192.168.1.65:3000/estudiantes/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                numControl: txtclaveEstudiante,
                nombreEst: txtnombreEstudiante,
                carreraEst: txtcarreraEstudiante,
                idDepto: Number(txtidDepto)
              })
          }).then(()=>{ 
            settclav()
            settclav('Proporciona el número de Control...')
            settnom();
            settnom('Proporciona nombre del Estudiante...')
            settcarr()
            settcarr('Proporciona carrera del Estudiante...')
            settdepto();
            settdepto('ID del departamento a que pertenece...')
            setclaveEstudiante('Escribe Numero Control')
            setnombreEstudiante('Escribe nombre del Estudiante')
            setcarreraEstudiante('Escribe carrera del Estudiante')
           // setidDepto('Escribe id del departamento')
            
            alert('Estudiante agregado'+' '+txtclaveEstudiante+' '+txtnombreEstudiante+' '+parseInt(txtidDepto))
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