import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from "../utils/Colors"

const Calculadora = () => {
    return (
    <View style={styles.container}>
        <Text> Calculadora</Text>
    </View>
    )
}

export default Calculadora

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.black
    }
})
