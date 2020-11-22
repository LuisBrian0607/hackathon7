import React, { useState } from 'react';
import { Text, View, Image, StyleSheet,Dimensions } from 'react-native';

const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin:20
    },
    fondo: {
        width: 372,
        height: 200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    infoContainer: {
         backgroundColor:'#663399',
         flexDirection:'row',
         height:80,
         borderBottomLeftRadius:10,
         borderBottomRightRadius:10
    },
    texto: {
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       marginTop:10,
       marginLeft:20
    },
    info: {
       color:'silver',
       fontSize:10,
       marginLeft:20      
    },
    perfil: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 30,
        marginLeft:20
    }

});


export const Header2 = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.fondo}
                    source={require('../../img/cielo.jpg')}
                />
                <View style={styles.infoContainer}>
                    <Image
                        style={styles.perfil}
                        source={require('../../img/imagen.jpg')}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.texto}>Ari Dugarte</Text>
                        <Text style={styles.info}>Cielo de Venezuela - 10min ago</Text>
                    </View>
                </View>
            </View>
        </>
    )
}