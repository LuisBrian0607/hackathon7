import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginLeft:20,
        marginRight:20
    },
    infoContainer: {
        backgroundColor: '#663399',
        flexDirection: 'row',
        height: 60,
        width:width/2.3,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    containerSecundario: {
        flexDirection:'row',

    },
    caja:{
        marginBottom:10,
        marginRight:10     
    },
    texto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10
    },
    info: {
        color: 'silver',
        fontSize: 12,
        marginLeft: 10
    },
    fondo: {
        width: width / 2.3,
        height: 100,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    perfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 30,
        marginLeft:10
    }
});

export const Contenido2 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerSecundario}>
                    <View style={styles.caja}>
                    <Image style={styles.fondo}
                            source={require('../../img/escaladas.jpg')}
                        />
                         <View style={styles.infoContainer}>
                            <Image
                                style={styles.perfil}
                                source={require('../../img/imagen.jpg')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>Ari Dugarte</Text>
                                <Text style={styles.info}>Escalando el colca </Text>
                                <Text style={styles.info}>1year ago</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                    <Image style={styles.fondo}
                            source={require('../../img/zurf.jpg')}
                        />
                         <View style={styles.infoContainer}>
                            <Image
                                style={styles.perfil}
                                source={require('../../img/imagen.jpg')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>Ari Dugarte</Text>
                                <Text style={styles.info}>Zurfeando en Piura </Text>
                                <Text style={styles.info}>2month ago</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.containerSecundario}>
                    <View style={styles.caja}>
                        <Image style={styles.fondo}
                            source={require('../../img/cataratas.jpg')}
                        />
                         <View style={styles.infoContainer}>
                            <Image
                                style={styles.perfil}
                                source={require('../../img/imagen.jpg')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>Ari Dugarte</Text>
                                <Text style={styles.info}>Cataratas de Perú </Text>
                                <Text style={styles.info}>10min ago</Text>
                            </View>
                        </View>
                        
                    </View>
                    <View>
                        <Image style={styles.fondo}
                            source={require('../../img/nevado.jpg')}
                        />
                        <View style={styles.infoContainer}>
                            <Image
                                style={styles.perfil}
                                source={require('../../img/imagen.jpg')}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.texto}>Ari Dugarte</Text>
                                <Text style={styles.info}>Nevados de Perú </Text>
                                <Text style={styles.info}>10day ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}