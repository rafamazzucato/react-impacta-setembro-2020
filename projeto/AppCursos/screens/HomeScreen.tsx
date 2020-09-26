import React, { useState, useEffect } from 'react';
import { RefreshControl, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Body, Card, CardItem, Col, Row } from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { Curso } from '../types';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos'

export const HomeScreen = (props: any) => {

    const [lista, setLista] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getCursos = async () => {
        try {
            setRefreshing(true);
            const response = await axios.get(URL);

            if (response && response.data) {
                setRefreshing(false);
                setLista(response.data);
            }
        } catch (e) {
            console.log(e)
            setRefreshing(false);
        }
    }

    useEffect(() => {
        getCursos();
    }, []);

    const showAlert = (curso: Curso) => {
        Alert.alert(
            "Meu Curso",
            "Detalhes:" +
            `\n codigo: ${curso.codigo}` +
            `\n descrição: ${curso.descricao}` +
            `\n carga horária: ${curso.cargaHoraria}` +
            `\n preço: ${curso.preco}` +
            `\n categoria: ${curso.categoria}`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    return (
        <FlatList
            style={styles.lista}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={getCursos} />
            }
            data={lista}
            keyExtractor={(e: Curso, i: number) => 'item-' + e._id + '-' + i}
            renderItem={({ item }) => (
                <TouchableOpacity key={item._id} onPress={e => showAlert(item)}>
                    <Card>
                        <CardItem header bordered style={styles.header}>
                            <Text style={[styles.headerText, styles.title]}>{item.descricao}</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text style={[styles.font, styles.label]}>Código:</Text>
                                    </Col>
                                    <Col>
                                        <Text style={[styles.font]}>{item.codigo}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={[styles.font, styles.label]}>Carga Horária:</Text>
                                    </Col>
                                    <Col>
                                        <Text style={[styles.font]}>{item.cargaHoraria}h</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={[styles.font, styles.label]}>Preço:</Text>
                                    </Col>
                                    <Col>
                                        <Text style={[styles.font]}>R$ {item.preco}</Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Text style={[styles.font, styles.label]}>Categoria:</Text>
                                    </Col>
                                    <Col>
                                        <Text style={[styles.font]}>{item.categoria}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    font: {
        fontSize: 16
    },
    label: {
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: '#2f95dc'
    },
    headerText: {
        color: '#fff'
    },
    lista: {
        paddingHorizontal: '2%'
    }
});