
import React from 'react';
import AuthContext from '../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL='https://react-auth-d3815-default-rtdb.firebaseio.com';

class AuthProvider extends React.Component{

    state={
        authUser:{},
        isAuthenticated :false,
        isAuthenticating : false,
        error:false,
    }


    // componentDidMount=()=>{
    //     this.setAuthenticating(true)
    //
    //     setTimeout(()=>{
    //         this.setAuthenticated(false);
    //         this.setAuthenticating(false);
    //     },5000)
    //
    // }


    signUpUserWithFirebase = async (user)=>{
        console.log(user)
        // try {
        //     const userRes = await axios.post(`${BASE_URL}/users.json`,user)
        // }
        // catch (e){
        //     console.log(e)
        // }
    }


    loginWithFirebase =async (email,password)=>{
        try {
            const allUser = await axios.get(`${BASE_URL}/users.json`);
            console.log(allUser.data)

            const userId = Object.keys(allUser.data)
            const users = userId.map(userId=>{
                return{
                    ...allUser.data[userId],
                    id:userId
                }
            })

            console.log(users)

            const loginUser = users.find(user=>user.email===email)
            var err ="";

            if (loginUser){
                console.log("User with given mail exist")
                if (loginUser.password !==password){
                    err="Email and Password don't match";
                }
                else {
                    err="Email and Password match"
                }
            }
            else {
                err="User with given email doesn't exist"
            }
            this.setState({
                ...this.state,

            })
        }
        catch (e){
            console.log(e)
        }
    }





    setAuthUser=(user) =>{
        this.setState({
            ...this.state,
            authUser: user
        })
    }

    setAuthenticated=(isAuthenticated) =>{
        this.setState({
            ...this.state,
            isAuthenticated
        })
    }

    setAuthenticating=(isAuthenticating) =>{
        this.setState({
            ...this.state,
            isAuthenticating
        })
    }
    setAuthError=(error) =>{
        this.setState({
            ...this.state,
            error
        })
    }







    render(){
        return(
             <AuthContext.Provider value={{
                 ...this.state,
                 setAuthUser : this.setAuthUser,
                 setAuthenticated:this.setAuthenticated,
                 setAuthenticating:this.setAuthenticating,
                 setAuthError:this.setAuthError,

                 signUpUserWithFirebase:this.signUpUserWithFirebase,
                 loginWithFirebase:this.loginWithFirebase,


             }}>
                 {this.props.children}
             </AuthContext.Provider>
        )
    }
}

export default AuthProvider;
