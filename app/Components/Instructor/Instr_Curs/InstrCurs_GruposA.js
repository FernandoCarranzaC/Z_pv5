import React from "react";
import { StyleSheet, View,ScrollView, Text, Alert, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../../hooks/useFetch'

export default function InstrCurs_GrupoA({idPers}) {
  const navigation = useNavigation();
  const {loading, data: actividades} = 
  useFetch(`http://192.168.1.65:3000/actividadgrupos?filter[where][idPers]=${Number(idPers)}`)
  return (
    <ScrollView centerContent={true} style={styles.viewBody} >
     {actividades.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('insdetalle-actividad',{idActiv: item.id, idPers:item.idPers})}>
       <ListItem key={i} bottomDivider>
          <Icon name={"bike"} type="material-community" />
          <ListItem.Content>
          <ListItem.Title>{item.claveGrpo}</ListItem.Title>
          <ListItem.Title>{item.nombreAct}</ListItem.Title>
          <ListItem.Title>{item.idPers}</ListItem.Title>
          </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
      </ScrollView>     
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 205,
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    color:"#2980B9",
    fontWeight: "bold"
  },
  textsubTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 15,
    color:"#2980B9",
    fontWeight: "bold"
  },
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#00BCD4"
  },
  btnContainer: {
    width: "80%"
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});
