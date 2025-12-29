import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({
    title,
    type,
    onPress
}: {
    title:string,
    type:"top"|"right"|"number";
    onPress: Funcition

}) => {
    
    
        return(
        <TouchableOpacity style={[
            style.button,
            {
                backgroundColor:
                type == "top"
                ? '#8c6548'
                : type == "right"
                ? '#a45113'
                : '#C19A6B',

        }]} onPress= {onPress}>
        
            <Text style={{fontSize:34,color:'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const style = StyleSheet.create({
    button:{
        height:70,
        width:70,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#C19A6B'
    }
})