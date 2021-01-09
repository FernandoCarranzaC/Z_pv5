import React,{useState} from "react";
import { StyleSheet, View, ScrollView,Text, TextInput, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function personalModificar({route}) {
  const { id, clavePers, nombrePers, idDepto } = route.params;
  const navigation = useNavigation();
  const[txtclavePersonal, setclavePersonal] = useState(clavePers)
  const[txtnombrePersonal, setnombrePersonal]= useState(nombrePers)
  const[txtidDepto, setidDepto]= useState(idDepto)
  const[tclav, settclav] = useState('Proporciona el número de tarjeta...')
  const[tnom,settnom]= useState("Proporciona nombre del personal...")
  const[tidDepto,settdepto]= useState("ID del departamento a que pertenece...")

  return (

    <View style={styles.viewBody}>
        <Text style={styles.textTitle}>ACTUALIZAR DATOS DE PERSONAL{"\n"}</Text>
    <ScrollView>
    <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue = {txtclavePersonal}
          placeholder = {tclav}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclavePersonal(c)}
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL PERSONAL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={txtnombrePersonal}
          placeholder={tnom}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(n)=>setnombrePersonal(n)}
          /> 
           <Text style={styles.textoutput}>ID DEL DEPARTAMENTO: </Text>
           <Text style={styles.textinfo}>{txtidDepto}</Text>
    {/*    <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          defaultValue={String(txtidDepto)}
          placeholder={tidDepto}
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"         
          autoCapitalize='characters' 
          onChangeText = {(s)=>setidDepto(s)}
  /> */}
<View style={styles.viewBtn}>
  <Button
      title="Actualizar Personal"
      buttonStyle={styles.btnStyle}
      containerStyle={styles.btnContainer}
      onPress={() => {
        fetch(`http://192.168.1.65:3000/personals/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              clavePers: txtclavePersonal,
              nombrePers: txtnombrePersonal,
              idDepto: Number(txtidDepto)
            })
        }).then(() => {
          settclav()
          settclav('Proporciona el número de tarjeta...')
          settnom();
          settnom('Proporciona nombre del personal...')
          settdepto();
          settdepto('ID del departamento a que pertenece...')
          setclavePersonal('Escribe clave del Personal')
          setnombrePersonal('Escribe nombre del Personal')
          //setidDepto('Escribe id del departamento')

          alert('Personal Actualizado'+' '+txtclavePersonal+' '+txtnombrePersonal+' '+parseInt(txtidDepto))
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