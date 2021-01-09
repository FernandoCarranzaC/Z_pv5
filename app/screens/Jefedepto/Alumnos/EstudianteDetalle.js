import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import useFetch from '../../../hooks/useFetch';

import { useNavigation } from "@react-navigation/native";
import DetEstud_Titulo from '../../../Components/Jefedepto/GestEst/EstDetalle/DetEstud_Titulo';
import DetEstudDatos from '../../../Components/Jefedepto/GestEst/EstDetalle/DetEstudDatos';
import DetEstudBotones from '../../../Components/Jefedepto/GestEst/EstDetalle/DetEstudBotones';




export default function EstudianteDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/estudiantes/${id}`)
    return (
        <View style={styles.viewBody}>
            <DetEstud_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
           <ScrollView>          
            <DetEstudDatos loading={loading} id={data.id} numControl={data.numControl} nombreEst={data.nombreEst} carreraEst={data.carreraEst}  idDepto={data.idDepto}/>
            <DetEstudBotones id={data.id} numControl={data.numControl} nombreEst={data.nombreEst} carreraEst={data.carreraEst}  idDepto={data.idDepto}/>
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