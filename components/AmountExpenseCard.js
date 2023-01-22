import {View, Text, StyleSheet, Pressable, Platform} from 'react-native'

function AmountExpenseCard({expenseType, Amount, onpress}){
    return(
        <View style={styles.container}>
        <Pressable onPress={onpress} 
    android_ripple={{color:'#ccc'}}
    style={({pressed})=>[styles.button, pressed? styles.buttonPressed : styles.null]}
    >
        <View style={styles.innercontainer}>
            <Text style={styles.title}>Expense Type: <Text style={styles.highlight}>{expenseType}</Text></Text>
            <Text style={styles.title}>Amount(in rupees) :<Text style={styles.highlight}>{Amount}</Text></Text>
        </View>
        </Pressable>
        </View>
    )
}

export default AmountExpenseCard;

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        borderWidth:1,
        backgroundColor:'#190333',
        borderRadius:30,
        overflow:Platform.OS==='android'?'hidden':'visible',
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
    },
    buttonPressed:{
        opacity:0.5,
    },
    innercontainer:{
        flex:1,
        padding:6,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    title:{
        fontSize:17,
        fontFamily:'poppinsmediumItalic',
        color:'white',
    },
    highlight:{
    }
})