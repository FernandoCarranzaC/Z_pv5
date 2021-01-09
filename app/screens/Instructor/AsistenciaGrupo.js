import React from "react";
import { Text,StyleSheet, View, ScrollView} from "react-native";
import IAListAsist_Titulo from "../../Components/Instructor/IA_ListAsist/IAListAsist_Titulo";
import IAListAsist_Grupo from "../../Components/Instructor/IA_ListAsist/IAListAsist_Grupo";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../hooks/useFetch'

export default function AsistenciaGrupo({route}) {
  const{idGrpo} = route.params;
  const navigation = useNavigation();
  const {loading, data: listacalif} = 
    useFetch(`http://192.168.1.65:3000/listaasist?filter[where][idGrpo]=${Number(idGrpo)}`)
  return (
   <View style={styles.viewBody}>
     <IAListAsist_Titulo/>
     <IAListAsist_Grupo idGrpo={idGrpo}/>
   </View>
   
  );
}


const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 0,
    marginBottom: 100,
    },
    
  });