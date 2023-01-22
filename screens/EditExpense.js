import {View, Text, StyleSheet, TextInput, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState, useContext } from 'react';
import { ExpenseContext } from '../context/expenseContext';
import uuid from 'react-native-uuid';

function EditExpense({route, navigation}){
    const itemId=route.params.itemId
    const [expense, setExpense]=useContext(ExpenseContext);
    let expenseTypeValue="";
    let amountValue="";
    const uuId=uuid.v4();

    const Displayexpenses=expense.filter((item)=>item.id==itemId);
    if (Displayexpenses){
       Displayexpenses.map(item=>{
        if (item.expenseType){
            expenseTypeValue=item.expenseType
        }
        if(item.Amount){
            amountValue=item.Amount
        }
       })
    }

   const [expenseType, setExpenseType]=useState(expenseTypeValue)
   const [Amount,setAmount]=useState(amountValue);
   const expensePlaceHolder=expenseType? '' :'Enter expense type'
   const amountPlaceholder=Amount? '' :'Enter Amount'

   function deleteHandler(){
    const updatedExpense = expense.filter(item => item.id !== itemId);
    setExpense(updatedExpense);
    navigation.navigate("RecentExpenseScreen");
   }

   function editHandler(){
    if (expenseType===''||Amount===''){
        Alert.alert("Missing", 'Mandatory fields are missing!', [{text:'Okay', style:'cancel'}])
        return;
    }
    const updatedExpense = expense.filter(item => item.id !== itemId);
    setExpense(updatedExpense);
    setExpense(prevExpense=>[...prevExpense,{expenseType:expenseType,Amount:Amount, id:uuId}])
    navigation.navigate('RecentExpenseScreen')
   }
   
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Edit your expense</Text>
           <TextInput 
           style={styles.expenseType} 
           value={expenseType}
           onChangeText={(e) => setExpenseType(e)}
           placeholder={expensePlaceHolder}
           />
           <TextInput 
           style={styles.amount}
           keyboardType='number-pad'
           value={Amount}
           onChangeText={(e) => setAmount(e)}
           placeholder={amountPlaceholder}
           />
           <View style={styles.buttoncontainer}>
           <PrimaryButton onpress={deleteHandler}>Delete</PrimaryButton>
           <PrimaryButton onpress={editHandler}>Edit</PrimaryButton>
           </View>
           
        </View>
    )
}

export default EditExpense;

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
    },
    buttoncontainer:{
        flexDirection:'row'
    }
})