import React from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";
import ICListCalif_Titulo from "../../Components/Instructor/IC_ListCalif/ICListCalif_Titulo";
import ICListCalif_Grupo from "../../Components/Instructor/IC_ListCalif/ICListCalif_Grupo";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../hooks/useFetch'

export default function CalificacionGrupo({route}) {
  const{idGrpo} = route.params;
  const navigation = useNavigation();
  const {loading, data: listacalif} = 
    useFetch(`http://192.168.1.65:3000/listacalifs?filter[where][idGrpo]=${Number(idGrpo)}`)
  return (
   <View style={styles.viewBody}>
     <ICListCalif_Titulo/>
    {/* <Text>id grupo xx {idGrpo}</Text> */}
     <ICListCalif_Grupo idGrpo={idGrpo}/>
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