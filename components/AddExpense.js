import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import PrimaryButton from './PrimaryButton';
import { useContext } from 'react';
import { useState } from 'react';
import { ExpenseContext } from '../context/expenseContext';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

function AddExpense(){
    const navigation=useNavigation();
    const [expenseType, setExpenseType]=useState('');
    const [Amount, setAmount]=useState('');
    const [expense, setExpense]=useContext(ExpenseContext);
    const uuId=uuid.v4();

    const addHandler=(e)=>{
        if (expenseType===''||Amount===''){
            Alert.alert("Missing", 'Mandatory fields are missing!', [{text:'Okay', style:'cancel'}])
            return;
        }
        setExpense(prevExpense=>[...prevExpense,{expenseType:expenseType,Amount:Amount, id:uuId}])
        setAmount('');
        setExpenseType('');
        navigation.navigate('RecentExpenseScreen');
    }
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Add New Expense</Text>
           <TextInput
           style={styles.expenseType} 
           placeholder='Expense type'
           value={expenseType}
           onChangeText={(e) => setExpenseType(e)}
           />
           <TextInput 
           style={styles.amount}
           keyboardType='number-pad'
           placeholder='Amount in rupees'
           value={Amount}
           onChangeText={(e) => setAmount(e)}
           />
           <PrimaryButton onpress={addHandler}>Add</PrimaryButton>
        </View>
    )
}

export default AddExpense;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'#0e021c',
    },
    title:{
        color:'white',
        fontFamily:'poppinsmediumItalic',
        fontSize:23,
    },
    amount:{
        width:'100%',
        borderWidth:1,
        padding:8,
        borderColor:'black',
        backgroundColor:'white',
        color:'black',
        borderRadius:20,
        fontSize:20,
        margin:20,
        fontFamily:'poppinsitalic',
    },
    expenseType:{
        width:'100%',
        borderWidth:1,
        padding:8,
        borderColor:'black',
        backgroundColor:'white',
        color:'black',
        borderRadius:20,
        fontSize:20,
        margin:20,
        fontFamily:'poppinsitalic'
    }
})
