import React from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import logo from '../../../assets/logo.png';
import Texto from '../../Components/Texto';
import Topo from './components/Topo';

export default function Cesta () {
    return (
    <>
        <SafeAreaView>                        
            <Topo/>

            <View style={estilos.view}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.logoJuntoNomeFazenda}>
                    <Image source={logo} style={estilos.imagemFazenda} />
                    <Texto style={estilos.nomeFazenda}>Jeny Jack Farm</Texto>
                </View>
                <Texto style={estilos.descricaoTexto}>
                    Umas cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha
                </Texto>
                <Texto style={estilos.preco}>R$ 40,00</Texto>
            </View>
        </SafeAreaView>
    </>
    )
}

const estilos = StyleSheet.create({    
    view: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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

})
