import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Header} from './components/header';
//import {Carrusel} from './components/carrusel';
import {Contenido} from './components/contenido';


const styles=StyleSheet.create({
    container:{
         flex:1
    }
})

export const Ejercicio1=()=>{
    return(
        <> 
           <View style={styles.container}>
               <Header/>
               {/*<Carrusel/>*/}
               <Contenido/>

           </View>
        </>
    )
   
}