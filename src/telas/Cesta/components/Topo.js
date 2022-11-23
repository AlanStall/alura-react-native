import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../Components/Texto';

export default function Topo() {
    return (
        <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
        </>
    )
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width, // tamanho da imagem topo
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }
});