import React,{useState} from "react";
import { ScrollView, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon, Input  } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../../hooks/useFetch'

export default function ICListCalif_Grupo({idGrpo}) {
  const[txtid, setid] = useState(null)
  const[txtnumControl, setnumControl] = useState(null)
  const[txtidEst, setidEst] = useState(null)
  const[txtnombreEst, setnombreEst] = useState(null)
  const[txtidGrpo, setidGrpo] = useState(null)
  const[txtnombrePers, setnombrePers] = useState(null)
  const[txtnombreAct, setnombreAct] = useState(null)
  const[txtcalifEst, setcalifEst] = useState(null)

const[icon, seticon] = useState("account-check-outline")
 
  const navigation = useNavigation();
  const {loading, data: listacalif} = 
    useFetch(`http://192.168.1.65:3000/listacalifs?filter[where][idGrpo]=${Number(idGrpo)}`)
  return (
    <ScrollView centerContent={true} >
    {listacalif.map((item, i,) => (
      <TouchableOpacity onPress = 
      {() => {
        fetch(`http://192.168.1.65:3000/listacalifs/${txtid}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              numControl: txtnumControl,
              idEst: Number(txtidEst),
              nombreEst: txtnombreEst,
              idGrpo: Number(txtidGrpo),
              nombrePers: txtnombrePers,
              nombreAct: txtnombreAct,
              califEst: txtcalifEst
            })
        }).then(() => {

          setid(null)
          setnumControl(null)
          setidEst(null)
          setnombreEst(null)
          setidGrpo(null)
          setnombrePers(null)
          setnombreAct(null)
          setcalifEst(null) 

         // setidDepto('Escribe id del departamento')
          alertItemactividad(txtid,txtnumControl,txtidEst,txtnombreEst,
            txtidGrpo,txtnombrePers,txtnombreAct,txtcalifEst)
          //alert('Estudiante Actualizado'+' '+txtclaveEstudiante+' '+txtnombreEstudiante+' '+parseInt(txtidDepto))
          navigation.navigate('calificacion-grupo')
           
            
        });
    }}
      >
       <ListItem key={i} bottomDivider>
          <Icon name={icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.numControl}</ListItem.Title>
            <ListItem.Title>{item.nombreEst}</ListItem.Title>
            <Input  
            //defaultValue = {item.califEst}
            placeholder={item.califEst}
           // placeholder='Calificación...'
            onChangeText = {(c)=>{setcalifEst(c) 
                                  setid(item.id)
                                  setnumControl(item.numControl)
                                  setidEst(item.idEst)
                                  setnombreEst(item.nombreEst)
                                  setidGrpo(item.idGrpo)
                                  setnombrePers(item.nombrePers)
                                  setnombreAct(item.nombreAct)
                                }
                                           
                           }
            />
          </ListItem.Content>
         
        </ListItem>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const alertItemactividad = (txtid,txtnumControl,txtidEst,txtnombreEst,
  txtidGrpo,txtnombrePers,txtnombreAct,txtcalifEst) => {
    if(!txtid) Alert.alert("Sin actualizar calificación...")
    else
    Alert.alert("Calificación Registrada"+ txtnumControl+' '+txtnombreEst+' '+
      txtcalifEst)
    //list[i].icon="account-check"
  }

