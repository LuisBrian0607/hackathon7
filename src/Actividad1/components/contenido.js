import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const styles=StyleSheet.create({
    containerBody:{
        flex:1
    },
    containerInfo:{
        flexDirection: 'row',
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    }
})


export const Contenido=()=>{
    return(
        <>
           <View style={styles.containerBody}>
               <Text style={styles.title}>My favorite Songs</Text>
               <View style={styles.containerInfo}>
                   <Text>Here Comes the Boom</Text>
                   <Text>Rise of the Northing</Text>
                   <Image
                   source={require('../../img/maranthony.jpg')}></Image>
               </View>
               <View style={styles.containerInfo}>
                   <Text>Eruption</Text>
                   <Text>Van halen</Text>
                   <Image
                   source={require('../../img/danielaDarc.jpg')}></Image>
               </View>
           </View>
        </>
    )
}