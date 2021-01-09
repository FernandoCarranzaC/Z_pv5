import React from "react";
import { StyleSheet, View, ScrollView, Text, Alert,TouchableOpacity } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useFetch from '../../../hooks/useFetch'
import  { useEffect, useState } from 'react';


export default function AC_Actividades({idEst}) {
  const navigation = useNavigation();
  const {loading2, data: actividades} = 
  useFetch(`http://192.168.1.65:3000/listacalifs?filter[where][idEst]=${Number(idEst)}`)
  return (
    <View centerContent={true} >
      {actividades.map((item, i) => (
      <TouchableOpacity onPress = {() =>{ 
      navigation.navigate('det-Activ-Calif',{idEst: item.idEst, idlistacalif: item.id, idactividadgrupo:item.idGrpo})
      }
      }>
       <ListItem key={i} bottomDivider>
          <Icon name={"bike"} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>ID: {item.id}</ListItem.Title>
            <ListItem.Title>NO.CONTROL: {item.numControl}</ListItem.Title>
            <ListItem.Title>CLAVE ACTIVIDAD: {item.idGrpo}</ListItem.Title>
            <ListItem.Title>NOMBRE ACTIVIDAD: {item.nombreAct}</ListItem.Title>
            <ListItem.Title>Clic ver status...</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  }
});

