import React, {useState, createContext} from 'react';

export const ExpenseContext=createContext();

export const ExpenseProvider=({children})=>{
    const [expense, setExpense]=useState([]);
    return(
        <ExpenseContext.Provider value={[expense,setExpense]}>
                {children}
        </ExpenseContext.Provider>
    )
}





