import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import {Header} from './components/header';
import {Contenido} from './components/contenido';


const styles=StyleSheet.create({
    container:{
         flex:1
    }
})

export const Ejercicio1=()=>{
    return(
        <> 
           <SafeAreaView style={styles.container}>
               <Header/>           
               <Contenido/>

           </SafeAreaView>
        </>
    )
   
}