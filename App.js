import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; 
import AddExpense from './components/AddExpense';
import {useFonts} from 'expo-font'
import { ExpenseProvider } from './context/expenseContext';
import EditExpense from './screens/EditExpense';


const bottomTab=createBottomTabNavigator();
const stack=createStackNavigator();

function AddExpenseHandler({navigation}){
  return(
    <stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:'black'},
      headerTintColor:'white',
    }}>
      <stack.Screen name='RecentExpenseScreen' component={RecentExpenses} options={{
        headerRight:()=>(
          <Ionicons name="add" size={24} color="white" 
          onPress={()=>navigation.navigate('AddExpenseScreen')}
          />
        ),
        title:'Recent Expenses'
      }}/>
      <stack.Screen name='AddExpenseScreen' component={AddExpense} options={{
        tabBarVisible: false,
        title:'Add Expense',
        }}/>
      <stack.Screen name='EditExpenseScreen' component={EditExpense} options={{
        tabBarVisible: false,
        title:'Edit expense',
        }}/>
    </stack.Navigator>
  )
}

export default function App() {
  const [loaded]=useFonts({
    poppinsregular:require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsmedium:require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsitalic:require('./assets/fonts/Poppins-Italic.ttf'),
    poppinsmediumItalic:require('./assets/fonts/Poppins-MediumItalic.ttf'),
  })
  if(!loaded){
    return null;
  }
 
  return (
    <>
    <StatusBar style='auto'>
    <ExpenseProvider>
    <NavigationContainer>
      <bottomTab.Navigator screenOptions={{
        tabBarStyle:{backgroundColor:'black'},
        tabBarActiveTintColor:'white',
        headerStyle:{backgroundColor:'black'},
        headerTintColor:'white',
      }}>
        <bottomTab.Screen name='recent' component={AddExpenseHandler} options={{
          headerShown:false,
          tabBarIcon:({size,color})=>(
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }}/>
        <bottomTab.Screen name='AllExpense' component={AllExpenses} options={{
          title:'All Expenses',
          tabBarIcon:({size,color})=>(
            <Ionicons name="calendar" size={size} color={color}/>
          )
        }}/>
      </bottomTab.Navigator>
    </NavigationContainer>
    </ExpenseProvider>
    </StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  
});
