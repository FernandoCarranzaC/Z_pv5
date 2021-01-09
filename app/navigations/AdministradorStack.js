import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Administrador from "..//screens/Administrador/Administrador";
import GestionDepto from "..//screens/Administrador/GestionDepto";
import GestionJefe from "..//screens/Administrador/GestionJefe";
import addDepto from "..//screens/Administrador/addDepto";
import addJefe from "..//screens/Administrador/addJefe";
import departamentoModificar from "..//screens/Administrador/departamentoModificar";
import departamentoDetalle from '../screens/Administrador/departamentoDetalle';
import jefeDetalle from '../screens/Administrador/jefeDetalle';
import jefeModificar from '../screens/Administrador/jefeModificar'


const Stack = createStackNavigator();

export default function AdministradorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="administrador"
        component={Administrador}
        options={{ title: "Administrador" }}
      />
      <Stack.Screen
        name="gestion-depto"
        component={GestionDepto}
        options={{ title: "Volver Administrador" }}
      />
      <Stack.Screen
        name="gestion-jefe"
        component={GestionJefe}
        options={{ title: "Volver Administrador" }}
      />
       <Stack.Screen
        name="add-depto"
        component={addDepto}
        options={{ title: "Volver Gestión de Departamento" }}
      />
       <Stack.Screen
        name="add-jefe"
        component={addJefe}
        options={{ title: "Volver Gestión de Jefes" }}
      />
        <Stack.Screen
        name="departamento-detalle"
        component={departamentoDetalle}
        options={{ title: "Volver Administrador" }}
      />
       <Stack.Screen
        name="departamento-modificar"
        component={departamentoModificar}
        options={{ title: "Volver Administrador" }}
      />
        <Stack.Screen
        name="jefe-detalle"
        component={jefeDetalle}
        options={{ title: "Volver Administrador" }}
      />
       <Stack.Screen
        name="jefe-modificar"
        component={jefeModificar}
        options={{ title: "Volver Administrador" }}
      />
    </Stack.Navigator>
  );
}
