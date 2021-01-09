import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function actividadModificar({route}) {
  const { data } = route.params;
 
  const navigation = useNavigation();
  const[txtclaveGrpo, setclaveGrpo]= useState(data.claveGrpo)
  const[txtidCat, setidCat]=useState(data.idCat)
  const[txtidDepto,setidDepto]=useState(data.idDepto)
  const[txtnombreAct,setnombreAct]=useState(data.nombreAct)
  const[txtidPers,setidPers]=useState(data.idPers)
  const[txthorarioAct,sethorarioAct]=useState(data.horarioAct)
  const[txtperiodoAct,setperiodoAct]=useState(data.periodoAct)
  const[txtaperturaAct,setaperturaAct]=useState(data.aperturaAct)
  const[ttclaveGrpo, ssetclaveGrpo]= useState('Escribe clave de grupo...')
  const[ttidCat, ssetidCat]=useState('Escribe ID Categoria...')
  const[ttidDepto,ssetidDepto]=useState('Escriba ID de Departamento...')
  const[ttnombreAct,ssetnombreAct]=useState('Escriba nombre de la Actividad...')
  const[ttidPers,ssetidPers]=useState('Escriba ID de Instructor...')
  const[tthorarioAct,ssethorarioAct]=useState('Escriba Horario de Actividad...')
  const[ttperiodoAct,ssetperiodoAct]=useState('Escriba Periodo de Actividad...')
  const[ttaperturaAct,ssetaperturaAct]=useState('Apertura D=deparamental I=institucional...')
  return (

    <View style={styles.viewBody}>
        <Text style={styles.textTitle}>ACTUALIZAR DATOS DE ACTIVIDAD{"\n"}</Text>
    <ScrollView>
    <Text style={styles.textoutput}>CLAVE DE GRUPO: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue = {txtclaveGrpo}
          placeholder = {ttclaveGrpo}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(a)=>setclaveGrpo(a)}
      /> 
      <Text style={styles.textoutput}>ID CATEGORIA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidCat)}
          placeholder={ttidCat}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(b)=>setidCat(b)}
          /> 
        <Text style={styles.textoutput}>ID DEPARTAMENTO: </Text>
        <Text style={styles.textinfo}>{txtidDepto}</Text>
   {/*    <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidDepto)}
          placeholder = {ttidDepto}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(c)=>setidDepto(c)}   
      />  
  */}
      <Text style={styles.textoutput}>NOMBRE DE ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtnombreAct}
          placeholder = {ttnombreAct}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(d)=>setnombreAct(d)}
      /> 
      <Text style={styles.textoutput}>ID INSTRUCTOR: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidPers)}
          placeholder = {ttidPers}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          keyboardType = 'numeric'
          onChangeText = {(e)=>setidPers(e)}   
      />  
      <Text style={styles.textoutput}>HORARIO DE ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txthorarioAct}
          placeholder = {tthorarioAct}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(f)=>sethorarioAct(f)}
      /> 
       <Text style={styles.textoutput}>PERIODO DE ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtperiodoAct}
          placeholder = {ttperiodoAct}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(f)=>setperiodoAct(f)}
      /> 
        <Text style={styles.textoutput}>TIPO DE APERTURA DE ACTIVIDAD: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtaperturaAct}
          placeholder = {ttaperturaAct}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(f)=>setaperturaAct(f)}
      /> 
<View style={styles.viewBtn}>
  <Button
      title="Actualizar Actividad"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch(`http://192.168.1.65:3000/actividadgrupos/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              claveGrpo:txtclaveGrpo,
                idCat: Number(txtidCat),
                idDepto: Number(txtidDepto),
                nombreAct: txtnombreAct,
                idPers: Number(txtidPers),
                horarioAct: txthorarioAct,
                periodoAct: txtperiodoAct,
                aperturaAct: txtaperturaAct
            })
        }).then(() => {
          ssetclaveGrpo()
          ssetclaveGrpo('Escribe clave de grupo...')
          ssetidCat()
          ssetidCat('Escribe ID Categoria...')
          ssetidDepto()
          ssetidDepto('Escriba ID de Departamento...')
          ssetnombreAct()
          ssetnombreAct('Escriba nombre de la Actividad...')
          ssetidPers()
          ssetidPers('Escriba ID de Instructor...')
          ssethorarioAct()
          ssethorarioAct('Escriba Horario de Actividad...')
          ssetperiodoAct()
          ssetperiodoAct('Escriba Periodo de Actividad...')
          ssetaperturaAct()
          ssetaperturaAct('Tipo de apertura D=deparamental I=institucional...')
          setclaveGrpo('Escribe clave de grupo')
          setidCat('Escribe ID Categoria')
          //setidDepto('Escriba ID de Departamento')
          setnombreAct('Escriba nombre de la Actividad')
          setidPers('Escriba ID de Instructor')
          sethorarioAct('Escriba Horario de Actividad')
          setperiodoAct('Escriba Periodo de Actividad')
          setaperturaAct('Apertura D=deparamental I=institucional')

          alert('Actividad Actualizada'+' '+txtclaveGrpo+' '+txtnombreAct)
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