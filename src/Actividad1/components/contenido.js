import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CategoriaRedSocial } from '../recursos/data/redsocialData';
import Redes from './Redes/Redes';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

    containerInfo: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop:20,
        backgroundColor:'#e0ffff',
        paddingBottom:10,
        width: width / 1.2,
        height: height / 10,
        borderRadius:10
    },
    title: {
        fontSize: 20,
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    cancion:{
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 10,
    },
    cantante:{
        fontSize: 16,
        marginLeft: 25,
        marginTop: 0,
    },
    logoFondo: {
        width: width / 7,
        height: height / 10,
        position: 'absolute',
        top: -5,
        bottom: 40,
        margin: 5,
        left: 280,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})


export const Contenido = () => {
    return (
        <>
            <View style={{ flex: 0.3, marginTop: 30 }}>
                <Text style={styles.title}>My social networks</Text>
                <Redes data={CategoriaRedSocial} />
            </View>
            <View style={{ flex: 0.3, marginTop: 0 }}>
                <Text style={styles.title}>My favorite Songs</Text>
                <View style={[styles.containerInfo,{ flexDirection:'column'}]}>
                    <Text style={styles.cancion}>Siento pena</Text>
                    <Text style={styles.cantante}>Marck Anthony</Text>
                    <Image
                        source={require('../../img/maranthony.jpg')}
                        style={styles.logoFondo}></Image>
                </View>
                <View style={[styles.containerInfo,{ flexDirection:'column'}]}>
                    <Text style={styles.cancion}>Señor mentira</Text>
                    <Text style={styles.cantante}>Daniela Darcurt</Text>
                    <Image
                        source={require('../../img/danielaDarc.jpg')}
                        style={styles.logoFondo}></Image>
                </View>
            </View>
        </>
    )
}