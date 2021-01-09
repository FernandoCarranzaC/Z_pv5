import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Jefedepto from "../screens/Jefedepto/Jefedepto/Jefedepto";
import GestionPersonal from "../screens/Jefedepto/Personal/GestionPersonal";
import addPersonal from "../screens/Jefedepto/Personal/addPersonal";
import personalModificar from "../screens/Jefedepto/Personal/personalModificar";
import personalDetalle from "../screens/Jefedepto/Personal/personalDetalle";
import GestionActividad from "../screens/Jefedepto/Actividades/GestionActividad";
import addActividad from "../screens/Jefedepto/Actividades/addActividad";
import GestionEstudiante from "../screens/Jefedepto/Alumnos/GestionEstudiante";
import addEstud from "../screens/Jefedepto/Alumnos/addEstud";
import EstudianteDetalle from "../screens/Jefedepto/Alumnos/EstudianteDetalle";
import estudianteModificar from "../screens/Jefedepto/Alumnos/estudianteModificar";
import ActividadDetalle from "../screens/Jefedepto/Actividades/ActividadDetalle";
import actividadModificar from "../screens/Jefedepto/Actividades/actividadModificar";
import JefedeptoIngreso from "../screens/Jefedepto/Jefedepto/JefedeptoIngreso";







const Stack = createStackNavigator();

export default function JefedeptoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jefesdepto"
        component={Jefedepto}
        options={{ title: "Jefes de Departamentos" }}
      />
      <Stack.Screen
        name="jefe-ingreso"
        component={JefedeptoIngreso}
        options={{ title: "Jefes de Departamentos" }}
      />
      <Stack.Screen
        name="gestion-personal"
        component={GestionPersonal}
        options={{ title: "Volver Jefes de Departamento" }}
      />
       <Stack.Screen
        name="add-personal"
        component={addPersonal}
        options={{ title: "Volver a Gestionar Personal" }}
      />
        <Stack.Screen
        name="personal-detalle"
        component={personalDetalle}
        options={{ title: "Volver a Gestionar Personal" }}
      />
       <Stack.Screen
        name="personal-modificar"
        component={personalModificar}
        options={{ title: "Volver a Gestionar Personal" }}
      />
      <Stack.Screen
        name="gestion-actividad"
        component={GestionActividad}
        options={{ title: "Volver Jefes de Departamento" }}
      />
        <Stack.Screen
        name="add-actividad"
        component={addActividad}
        options={{ title: "Volver Gestionar  Actividades" }}
      />
        <Stack.Screen
        name="actividad-detalle"
        component={ActividadDetalle}
        options={{ title: "Volver a Gestionar Estudiante" }}
      />
       <Stack.Screen
        name="actividad-modificar"
        component={actividadModificar}
        options={{ title: "Volver a Gestionar Estudiante" }}
      />
       <Stack.Screen
        name="gestion-estudiante"
        component={GestionEstudiante}
        options={{ title: "Volver Jefes de Departamento" }}
      />
      <Stack.Screen
        name="add-estudiante"
        component={addEstud}
        options={{ title: "Volver a Gestionar Estudiante" }}
      />
        <Stack.Screen
        name="estudiante-detalle"
        component={EstudianteDetalle}
        options={{ title: "Volver a Gestionar Estudiante" }}
      />
       <Stack.Screen
        name="estudiante-modificar"
        component={estudianteModificar}
        options={{ title: "Volver a Gestionar Estudiante" }}
      />
    </Stack.Navigator>
  );
}
