import React,{useState} from "react";
import { ScrollView, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon, CheckBox  } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../../hooks/useFetch'

export default function IAListAsist_Grupo({idGrpo}) {
 /* const[txtid, setid] = useState(null)
  const[txtnumControl, setnumControl] = useState(null)
  const[txtidEst, setidEst] = useState(null)
  const[txtnombreEst, setnombreEst] = useState(null)
  const[txtidGrpo, setidGrpo] = useState(null)
  const[txtnombrePers, setnombrePers] = useState(null)
  const[txtnombreAct, setnombreAct] = useState(null)*/
  const[txtasistEst, setasistEst] = useState(null)

  const[icon, seticon] = useState("account-check-outline")

  const navigation = useNavigation();
  const {loading, data: listasist} = 
    useFetch(`http://192.168.1.65:3000/listaasist?filter[where][idGrpo]=${Number(idGrpo)}`)
  return (
    <ScrollView centerContent={true} >
     {listasist.map((item, i) => (
      <TouchableOpacity onPress = 
      {() => {
        fetch(`http://192.168.1.65:3000/listaasist/${item.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              numControl: item.numControl,
              idEst: Number(item.idEst),
              nombreEst: item.nombreEst,
              idGrpo: Number(item.idGrpo),
              nombrePers: item.nombrePers,
              nombreAct: item.nombreAct,
              asistEst: Number(item.asistEst)
            })
        }).then(() => {

        /*  setid(null)
          setnumControl(null)
          setidEst(null)
          setnombreEst(null)
          setidGrpo(null)
          setnombrePers(null)
          setnombreAct(null) */
          setasistEst(null) 
           alertItemactividad(item.id,item.numControl,item.idEst,item.nombreEst,
            item.idGrpo,item.nombrePers,item.nombreAct,item.asistEst)
        // setidDepto('Escribe id del departamento')
       // alertItemactividad(txtid,txtnumControl,txtidEst,txtnombreEst,
       //   txtidGrpo,txtnombrePers,txtnombreAct,txtasistEst)
        //alert('Estudiante Actualizado'+' '+txtclaveEstudiante+' '+txtnombreEstudiante+' '+parseInt(txtidDepto))
        navigation.navigate('asistencia-grupo')
        
               
      });
    }}
      >
       <ListItem key={i} bottomDivider>
          <Icon name={icon} type="material-community" />
          <ListItem.Content>
          <ListItem.Title>{item.numControl}</ListItem.Title>
          <ListItem.Title>{item.nombreEst}</ListItem.Title>
          <ListItem.Title>Edo. Asistencia: {item.asistEst}</ListItem.Title>  
          {/*<ListItem.Title>asis arreglo: {listasist[i].asistEst}</ListItem.Title> */}
          
          <CheckBox  title='Asistencia +' 
            checked={true} 
            onPress=  {()=>{  listasist[i].asistEst=listasist[i].asistEst+1;
                               setasistEst(Number(txtasistEst)+1) 
                            } }
          />
           <CheckBox  title='Asistencia -' 
            checked={false} 
            onPress=  {()=>{  listasist[i].asistEst=listasist[i].asistEst-1;
                              setasistEst(Number(txtasistEst)+1) 
                            } }
          />
          </ListItem.Content> 
        </ListItem>
        </TouchableOpacity>
      ))}
   </ScrollView>
  );
}

const alertItemactividad = (txtid,txtnumControl,txtidEst,txtnombreEst,
  txtidGrpo,txtnombrePers,txtnombreAct,txtasistEst) => {
    Alert.alert('Asistencia Registrada :'+' '+txtnumControl+' '+txtnombreEst+' '+txtasistEst)
    //list[i].icon="account-check"
  }

