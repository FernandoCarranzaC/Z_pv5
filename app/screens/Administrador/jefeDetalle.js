import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetJefe_Titulo from "../../Components/Administrador/GestJefeD/JefeDetalle/DetJefe_Titulo";
import DetJefeDatos from "../../Components/Administrador/GestJefeD/JefeDetalle/DetJefeDatos";
import DetJefeBotones from "../../Components/Administrador/GestJefeD/JefeDetalle/DetJefeBotones";
import { useNavigation } from "@react-navigation/native";




export default function jefeDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/jefes/${id}`)
    return (
        <View style={styles.viewBody}>
            <DetJefe_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
           <ScrollView>
            <DetJefeDatos loading={loading} id={data.id} claveJefe={data.claveJefe} nombreJefe={data.nombreJefe} idDepto={data.idDepto}/>
            <DetJefeBotones id={data.id} claveJefe={data.claveJefe} nombreJefe={data.nombreJefe} idDepto={data.idDepto}/>
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