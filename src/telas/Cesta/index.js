import React from 'react';
import { FlatList, StyleSheet, SafeAreaView, Image, View } from 'react-native';
import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Botao from './components/Botao';
import Item from './components/Item';
import Texto from '../../Components/Texto';

export default function Cesta ({ topo, detalhes, itens }) {
    return (
    <SafeAreaView>
        <>
        <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                <Topo {...topo} />
                <View style={estilos.view}> 
                    <Detalhes {...detalhes}/>                
                    <Botao {...detalhes} /> 
                    <Texto style={estilos.titulo}>{ itens.titulo }</Texto>               
                </View>
                </>
            }}
        />                                
        </ >
    </SafeAreaView>
    )
}

const estilos = StyleSheet.create({  
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },  
    view: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})
