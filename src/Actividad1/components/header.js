import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    ContainerPerfil: {
        flexDirection: 'row',
        marginLeft: 50,
        borderBottomWidth: 2,
        marginRight: 40,
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 30,
    },
    texto: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 50,
        marginLeft: 20,
    },
    textoView: {
        marginTop: 5,
        marginLeft: 20,
        color: '#a9a9a9',
        fontWeight:'bold'
    }
})

export const Header = () => {

    const [nick, setNick] = useState('Ari Dugarte');
    return (
        <>
            <View style={styles.ContainerPerfil}>

                <Image style={styles.logo}
                    source={require('../../img/imagen.jpg')}
                />
                <View style={{ flexDirection:'column'}}>             
                    <Text style={styles.texto}>{nick}</Text>
                    <Text style={styles.textoView}>200K folowers</Text>
                </View>

                <Image
                    source={{
                        uri: 'https://webstockreview.net/images/how-to-edit-png-images-14.png',
                    }}
                    style={{ width: 20, height: 20, marginTop: 50, marginLeft: 110 }}
                />
            </View>

        </>
    )

}


