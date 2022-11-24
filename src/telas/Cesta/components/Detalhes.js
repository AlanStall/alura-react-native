import React from 'react';
import Texto from '../../../Components/Texto';
import { View, Image, StyleSheet } from 'react-native';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricaoTexto, preco }) {
    return (
        <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.logoJuntoNomeFazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricaoTexto}>
            { descricaoTexto }
        </Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,        
        fontWeight: 'bold',
    },
    logoJuntoNomeFazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },  
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,        
    },
    descricaoTexto: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 16,
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }    
});