import React,{useState} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ImagenContainer: {
        alignItems: "flex-start",
        padding: 20
    },
    ContainerPerfil: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo:{
        width:200,
        height:200,
        borderRadius:100,
        marginTop:10
    },
    texto:{
        fontSize:15,
        fontWeight:"bold"
    }

})

export const Header = () => {

    const[nick,setNick]=useState('Ari Dugarte');
    return (
        <>
            <View style={styles.ImagenContainer}>
                <View style={styles.ContainerPerfil}>

                    <Image style={styles.logo}
                        source={require('../../img/imagen.jpg')}
                    />
                    <Text style={styles.texto}>
                        {nick}
                        {"\n"}
                        25k followers
                    </Text>

                    <Image
                        source={{
                            uri: 'https://webstockreview.net/images/how-to-edit-png-images-14.png',
                        }}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                
            </View>

        </>
    )

}


