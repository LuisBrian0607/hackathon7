import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import {Header2} from './components/header2';
import {Contenido2} from './components/contenido2';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export const Ejercicio2 = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                  <Header2/>
                  <Contenido2/>
                </ScrollView>

            </SafeAreaView>
        </>
    )

}