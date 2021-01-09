import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import DetPers_Titulo from "../../../Components/Jefedepto/GestPers/PersDetalle/DetPers_Titulo";
import DetPersDatos from "../../../Components/Jefedepto/GestPers/PersDetalle/DetPersDatos";
import DetJPersBotones from "../../../Components/Jefedepto/GestPers/PersDetalle/DetJPersBotones";
import { useNavigation } from "@react-navigation/native";




export default function personalDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/personals/${id}`)
    return (
        <View style={styles.viewBody}>
            <DetPers_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
           <ScrollView>
            <DetPersDatos loading={loading} id={data.id} clavePers={data.clavePers} nombrePers={data.nombrePers} idDepto={data.idDepto}/>
            <DetJPersBotones id={data.id} clavePers={data.clavePers} nombrePers={data.nombrePers} idDepto={data.idDepto}/>
           </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 20,
    marginBottom: 100,
    },
    
  });