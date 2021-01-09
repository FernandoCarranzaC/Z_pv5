import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import useFetch from '../../../../hooks/useFetch'
import { useNavigation } from "@react-navigation/native";

export default function GestJefe_ListJefe() {
  const navigation = useNavigation();
  const {loading, data: jefes} = useFetch(`http://192.168.1.65:3000/jefes/`)
  return (
    <ScrollView centerContent={true} >
    {jefes.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('jefe-detalle',{id: item.id})}>
       <ListItem key={i} bottomDivider>
          <Icon name={"account-circle-outline"} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.claveJefe}</ListItem.Title>
            <ListItem.Title>{item.nombreJefe}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.claveJefe+' '+item.nombreJefe+' '+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});

