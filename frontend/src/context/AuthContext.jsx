import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const AuthContext = createContext();       //createcontext function makes a new context


export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        
        case 'LOGOUT':
            return { user: null }

        default:
            return state;   //the default state means if there are no changes, we will simply return the state
    }
}


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user:null    //user will be initially null
    })

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('user'))  //the token that is saved in local storage will be parsed into object and stored in user so that we can access the email from the user

        if(user){  //using this user we can access any information that we want to display on the screen, in this case i am displaying the email only
            dispatch({ type: 'LOGIN', payload: user})  //if the user will exist we will dispatch the user as payload during login action
        }


    }, [])

    console.log('AuthContext state : ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }                     {/*children is the whole app component */}
           </AuthContext.Provider>
    )

}