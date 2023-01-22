import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native';
import { useContext } from 'react';
import { ExpenseContext } from '../context/expenseContext';
import AmountExpenseCard from '../components/AmountExpenseCard';

function RecentExpenses({navigation}){
    const [expense,setExpense]=useContext(ExpenseContext);
    function renderItem(itemData){
        function pressHandler(){
            navigation.navigate("EditExpenseScreen",{
                itemId:itemData.item.id
            });
        }
        return <AmountExpenseCard 
        Amount={itemData.item.Amount} 
        expenseType={itemData.item.expenseType}
        onpress={pressHandler}
        />
    }
    return(
       expense.length!=0 ?
       <FlatList 
       data={expense}
       keyExtractor={(item, index) => index.toString()}
       renderItem={renderItem}
       /> :
       <View style={styles.noexpenseContainer}>
       <Text style={styles.text}>No expense Added</Text> 
       </View>
    )

}

export default RecentExpenses

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    noexpenseContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        fontFamily:'poppinsmediumItalic'
    }
})