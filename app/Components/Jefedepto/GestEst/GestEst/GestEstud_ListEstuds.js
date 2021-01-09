import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import useFetch from '../../../../hooks/useFetch';
import { useNavigation } from "@react-navigation/native";

export default function GestEstud_ListEstuds({idDepto}) {
  const navigation = useNavigation();
  const {loading, data: estudiantes} = 
  useFetch(`http://192.168.1.65:3000/estudiantes?filter[where][idDepto]=${Number(idDepto)}`)
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
     {estudiantes.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('estudiante-detalle',{id:item.id})}>
       <ListItem key={i} bottomDivider>
          <Icon name={"face-outline"} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.numControl}</ListItem.Title>
            <ListItem.Title>{item.nombreEst}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.numControl+' '+item.nombreEst+' '+ "\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});
