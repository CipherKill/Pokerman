import React, { useState } from 'react';
import {View,Text, SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard} from 'react-native'
import { styles } from './Styles/mainstyle';



const App=()=>{
  
  const [data,setData]=useState({});
  const [result,setResult]=useState(parseFloat(0.00));
  const [color,setColor]=useState('lightgrey');
  
  const calculate=({currentchips,buyin,totalchips})=>{
    // console.log(`Buyin ${buyin}\nTotalchips ${totalchips}\nCurrentChips ${currentchips}`)
    Keyboard.dismiss();
    const result=parseFloat((((currentchips-totalchips)*buyin)/totalchips));
    if(result===0){
      setColor('white');
    }
    else if(result>0){
      setColor('green');
    }
    else if(result<0){
      setColor('red');
    }

    return (parseFloat(buyin)+result).toFixed(1);
  }

  const handleChange=(key,value)=>{
    setData(previousState=>({...previousState,[key]:value}))
  }

  const handleSubmit=()=>{
    setResult(calculate(data))
  }

  const handleClear=()=>{
    setData({});
    setColor('lightgrey');
    setResult(0);
  }

  return (
    <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Pokerman <Text style={{fontSize:20}}>By Alan</Text></Text>
          </View>
      <ScrollView keyboardShouldPersistTaps='handled'>
          {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}> */}
            <View style={styles.mainContainer}>
              <Text style={styles.label}>Buy-in Amount:</Text>
              <TextInput keyboardType='numeric' style={styles.mainInput} placeholder="Enter the buy-in amount in Rs" placeholderTextColor="lightgrey" onChangeText={text=>handleChange('buyin',text)} value={data.buyin}/>
              <Text style={styles.label}>Total Chips Taken Value:</Text>
              <TextInput keyboardType='numeric' style={styles.mainInput} placeholder="Enter the total chip value" placeholderTextColor="lightgrey" onChangeText={text=>handleChange('totalchips',text)} value={data.totalchips}/>
              <Text style={styles.label}>Current Chip Value:</Text>
              <TextInput keyboardType='numeric' style={styles.mainInput} placeholder="Enter the current chip value" placeholderTextColor="lightgrey" onChangeText={text=>handleChange('currentchips',text)} value={data.currentchips}/>
              <View style={styles.mainResultContainer}>
                <Text style={[styles.mainResultTitle,,{color}]}>You get Rs {result}</Text>  
              </View>
              <View style={styles.mainButtonContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={handleSubmit}><Text style={styles.buttonTitle}>Calculate</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.clear} onPress={handleClear}><Text style={styles.clearTitle}>Clear</Text></TouchableOpacity>
              </View>
            </View>
          {/* </KeyboardAvoidingView> */}
      </ScrollView>
        </View>
    </SafeAreaView>
  );
}

export default App;


