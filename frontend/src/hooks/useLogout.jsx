import { useAuthContext } from "./useAuthContext";
// import { useWorkoutsContext } from "./useWorkoutContext";

export const useLogout = () =>{

    const { dispatch } = useAuthContext();
    
    // const { dispatch : workoutDispatch } = useWorkoutsContext();  //we have done dispatch: workoutDispatch because we should not use two things with the same name in same file

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        // workoutDispatch({ type: 'SET_WORKOUTS', payload: null});  // we are doing this to remove the workouts from the page when the user logs out
    }

    return { logout };

}