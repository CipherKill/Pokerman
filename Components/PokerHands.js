import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../Styles/mainstyle";

const PokerHands=()=>{
    return (
        <View style={{marginVertical:30}}>
            <Text style={{color:'white',alignSelf:'center',fontSize:20}}>Poker Hand Rankings</Text>
            <Image source={require('../assets/rankings.png')} style={{
                height:450,
                width:400,
                marginVertical:30,
                alignSelf:'center'
            }}/>
        </View>
    );
}

export default PokerHands;