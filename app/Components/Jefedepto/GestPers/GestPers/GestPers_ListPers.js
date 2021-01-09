import React from "react";
import { StyleSheet, View, ScrollView, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import useFetch from '../../../../hooks/useFetch';
import { useNavigation } from "@react-navigation/native";

export default function GestPers_ListPers({idDepto}) {
  const navigation = useNavigation();
  const {loading, data: personal} = 
  useFetch(`http://192.168.1.65:3000/personals?filter[where][idDepto]=${Number(idDepto)}`)
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
     {personal.map((item, i) => (
      <TouchableOpacity onPress = {() => navigation.navigate('personal-detalle',{id:item.id})}>
       <ListItem key={i} bottomDivider>
          <Icon name={"account-outline"} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.clavePers}</ListItem.Title>
            <ListItem.Title>{item.nombrePers}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const alertItemName = (item) => {
  Alert.alert(item.clavePers+' '+item.nombrePers +' '+"\n actualizar  borrar ")
}



const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
    marginBottom: 200,

  }
});
