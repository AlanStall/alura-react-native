import React from 'react';
import Texto from '../../../Components/Texto';
import { View, Image, StyleSheet, FlatList } from 'react-native';


export default function Item ({ item: { nome, imagem } }) {

    return <View style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.nome}>{ nome }</Texto>                    
            </View>    
};

const estilos = StyleSheet.create({    
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
    },
    imagem: {
        height: 56,
        width: 56,
        borderRadius: 8
    },
    nome: {
        fontSize: 14,
        lineHeight: 26,
        marginLeft: 12,
        color: '#464646',
        fontWeight: 'bold'
    }
})