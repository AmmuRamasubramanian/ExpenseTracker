import {View, Text, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { ExpenseContext } from '../context/expenseContext';

function AllExpenses(){
    const [expense, setExpense]=useContext(ExpenseContext)
    let total=expense.reduce((sum,amount)=>sum+parseInt(amount.Amount),0)
    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.titleTag}>Total Amount spent</Text>
                <Text style={styles.rsText}>(In rupees)</Text>
                <Text style={styles.totalText}>{total}</Text>
            </View>
        </View>
    )
}

export default AllExpenses

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    innercontainer:{
        backgroundColor:'#0e021c',
        margin:10,
        padding:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    titleTag:{
        fontSize:25,
        padding:5,
        paddingBottom:10,
        fontFamily:'poppinsmediumItalic',
        color:'white'
    },
    rsText:{
        color:'white',
        fontFamily:'poppinsmediumItalic',
        fontSize:16,
        paddingBottom:20,
    },
    totalText:{
        color:'white',
        fontFamily:'poppinsmediumItalic',
        fontSize:30,
    }
})
