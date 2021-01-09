import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetDepto_Titulo from "../../Components/Administrador/GestDepto/DeptoDetalle/DetDepto_Titulo";
import DetDeptoDatos from "../../Components/Administrador/GestDepto/DeptoDetalle/DetDeptoDatos";
import DetDeptoBotones from "../../Components/Administrador/GestDepto/DeptoDetalle/DetDeptoBotones";
import { useNavigation } from "@react-navigation/native";




export default function departamentoDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/departamentos/${id}`)
    return (
        <View style={styles.viewBody}>
            <DetDepto_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
           <ScrollView>
            <DetDeptoDatos loading={loading} id={data.id} claveDepto={data.claveDepto} nombreDepto={data.nombreDepto} subdireccionDepto={data.subdireccionDepto}/>
            <DetDeptoBotones id={data.id} claveDepto={data.claveDepto} nombreDepto={data.nombreDepto} subdireccionDepto={data.subdireccionDepto}/>
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