import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function estudianteModificar({route}) {
  const { id, numControl, nombreEst, carreraEst, idDepto } = route.params;
  const navigation = useNavigation();
  const[txtclaveEstudiante, setclaveEstudiante] = useState(numControl)
  const[txtnombreEstudiante, setnombreEstudiante]= useState(nombreEst)
  const[txtcarreraEstudiante, setcarreraEstudiante]= useState(carreraEst)  
  const[txtidDepto, setidDepto]= useState(idDepto)
  const[tclav, settclav] = useState('Proporciona el número de Control...')
  const[tnom,settnom]= useState("Proporciona nombre del Estudiante...")
  const[tcarr,settcarr]= useState("Proporciona carrera del Estudiante...")
  const[tdepto,settdepto]= useState("ID del departamento a que pertenece...")

  return (

    <View style={styles.viewBody}>
        <Text style={styles.textTitle}>ACTUALIZAR DATOS DE ESTUDIANTE{"\n"}</Text>
    <ScrollView>
    <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue = {txtclaveEstudiante}
          placeholder = {tclav}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveEstudiante(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtnombreEstudiante}
          placeholder={tnom}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombreEstudiante(n)}
          /> 
        <Text style={styles.textoutput}>CARRERA DEL ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtcarreraEstudiante}
          placeholder={tcarr}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(cr)=>setnombreEstudiante(cr)}
          /> 
        <Text style={styles.textoutput}>ID DEL DEPARTAMENTO: </Text>
        <Text style={styles.textinfo}>{txtidDepto}</Text>
    {/*    <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidDepto)}
          placeholder={tdepto}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(d)=>setidDepto(d)}
  />  */}
<View style={styles.viewBtn}>
  <Button
      title="Actualizar Estudiante"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch(`http://192.168.1.65:3000/estudiantes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              numControl: txtclaveEstudiante,
              nombreEst: txtnombreEstudiante,
              carreraEst: txtcarreraEstudiante,
              idDepto: Number(txtidDepto)
            })
        }).then(() => {
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

          alert('Estudiante Actualizado'+' '+txtclaveEstudiante+' '+txtnombreEstudiante+' '+parseInt(txtidDepto))
          navigation.navigate('jefe-ingreso')
           
            
        });
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
  textTitle: {
    marginTop: 20,
    marginBottom: 0,
    textAlign: "center",
    fontSize: 20,
    color:"green",
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
 btnAddMaestro: {
  marginBottom: 5
 },
 btnStyle: {
   backgroundColor: "#48C9B0",

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