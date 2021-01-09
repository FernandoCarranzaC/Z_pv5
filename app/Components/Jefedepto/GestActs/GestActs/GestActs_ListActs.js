import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import useFetch from '../../../../hooks/useFetch';
import { useNavigation } from "@react-navigation/native";

export default function GestActs_ListActs({idDepto}) {
  const navigation = useNavigation();
  const {loading, data: actividades} = 
  useFetch(`http://192.168.1.65:3000/actividadgrupos?filter[where][idDepto]=${Number(idDepto)}`)
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
     {actividades.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('actividad-detalle',{id:item.id})}>
       <ListItem key={i} bottomDivider>
          <Icon name={"bike"} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.claveGrpo}</ListItem.Title>
            <ListItem.Title>{item.nombreAct}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.claveGrpo+' '+item.nombreAct+' '+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});
