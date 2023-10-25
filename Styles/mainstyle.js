import { Dimensions, StyleSheet } from "react-native";

const {height,width}=Dimensions.get('window')

export const styles={
    container:{
        backgroundColor:'#070b12',
        height:height+100,
        paddingVertical:25,
        paddingHorizontal:20
    },
    header:{
        backgroundColor:'#070b12',        
    },
    headerTitle:{
        color:'cyan',
        fontWeight:'500',
        fontSize:40,
    },
    mainContainer:{
        marginVertical:50,
    },
    mainInput:{
        color:'lightgrey',
        fontSize:20,
        borderWidth:1,
        borderColor:'cyan',
        borderRadius:10,
        marginVertical:12,
        paddingVertical:15,
        paddingHorizontal:10
    },
    mainResultContainer:{
        alignItems:'center',
        marginVertical:25
    },
    mainResultTitle:{
        color:'lightgrey',
        fontSize:30,
        marginVertical:20
    },
    buttonContainer:{
        borderWidth:5,
        borderColor:'cyan',
        borderRadius:10,
        padding:25,
        marginBottom:25
    },
    buttonTitle:{
        color:'cyan',
        fontSize:25,
        alignSelf:'center',
    },
    label:{
        color:'cyan',
        marginTop:10,
        fontSize:16
    },
    clear:{
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        padding:10,
    },
    clearTitle:{
        color:'white',
        fontSize:20,
        alignSelf:'center'
    },
    mainButtonContainer:{
        // height:500,
        // backgroundColor:'red'
    }
}