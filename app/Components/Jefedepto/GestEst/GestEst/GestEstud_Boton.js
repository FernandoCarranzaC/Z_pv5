import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function GestEstud_Boton({idDepto}) {
  const navigation = useNavigation();
  return (        
    <View style={styles.viewBtn}>
        <Button title="Agregar Estudiante"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate('add-estudiante',{idDepto:idDepto})}
          />
    </View>
       
         

  );
}


const styles = StyleSheet.create({
  
  btnAddMaestro: {
    marginBottom: 5
  },
  btnStyle: {
    backgroundColor: "#48C9B0"
  },
  btnContainer: {
    width: "70%",
    marginBottom: 15
  },
  viewBtn: {
    alignItems: "center"
  },
});