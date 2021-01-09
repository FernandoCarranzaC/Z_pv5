import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import useFetch from '../../../hooks/useFetch';
import { useNavigation } from "@react-navigation/native";
import DetActiv_Titulo from '../../../Components/Jefedepto/GestActs/ActsDetalle/DetActiv_Titulo';
import DetActivDatos from '../../../Components/Jefedepto/GestActs/ActsDetalle/DetActivDatos';
import DetActivBotones from '../../../Components/Jefedepto/GestActs/ActsDetalle/DetActivBotones';




export default function ActividadDetalle({route}) {
    const {id } = route.params;
    const navigation = useNavigation();
    //const { loading, data } = useFetch(`http://192.168.1.65:3000/categorias?filter[where][claveCat]=${claveCat}`)
    const { loading, data } = useFetch(`http://192.168.1.65:3000/actividadgrupos/${id}`)
    return (
        <View style={styles.viewBody}>
            <DetActiv_Titulo/>
           {/* <Text>{data[0].claveCat}</Text>*/}
           <ScrollView>          
            {/*<DetActivDatos loading={loading} id={data.id} numControl={data.numControl} nombreEst={data.nombreEst} carreraEst={data.carreraEst}  idDepto={data.idDepto}/>*/}
            <DetActivDatos loading={loading} data={data} />
            {/*<DetActivBotones id={data.id} numControl={data.numControl} nombreEst={data.nombreEst} carreraEst={data.carreraEst}  idDepto={data.idDepto}/>*/}
            <DetActivBotones loading= {loading} data={data} />
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