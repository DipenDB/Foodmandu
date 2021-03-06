
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
        errorMessage :"",
        allRestaurant:'',
        allGroceries:'',
    }


    componentDidMount=async ()=>{
        // await AsyncStorage.removeItem("users")
        // await AsyncStorage.removeItem("authenticated")



        this.setAuthenticating(true)
        const auth=await AsyncStorage.getItem('authenticated')
        console.log(auth)

        if (!auth){
            this.setAuthenticated(false)
        }else {
            this.setAuthenticated(true)
            this.setAuthUser(JSON.parse(auth))
        }
        this.setAuthenticating(false)


        //----------------------Get all restaurant and save on  constant-------------------------------------------------------------------
        const allRestaurant = await axios.get(`${BASE_URL}/restaurants.json`)
        const restaurantId =Object.keys(allRestaurant.data)
        const restaurants=restaurantId.map(restaurantId=>{
            return{
                ...allRestaurant.data[restaurantId],
                id: restaurantId
            }
        })
        this.setAllRestaurant(restaurants)
        // console.log(restaurants)
        //-------------------------------------------------------------------------------------------------------------------------------------



        //----------------------Get all groceries and save on  constant-------------------------------------------------------------------
        const allGroceries = await axios.get(`${BASE_URL}/groceries.json`)
        const groceryIds =Object.keys(allGroceries.data)
        const groceries=groceryIds.map(groceryId=>{
            return{
                ...allGroceries.data[groceryId],
                id: groceryId
            }
        })
        this.setAllGroceries(groceries)
        // console.log(groceries)
        //-------------------------------------------------------------------------------------------------------------------------------------






    }


    signUpUserWithFirebase = async (user)=>{
        console.log(user)
        try {
            const userRes = await axios.post(`${BASE_URL}/users.json`,user)
        }
        catch (e){
            console.log(e)
        }
    }



    loginWithFirebase =async (user)=>{
        // console.log(user.email,user.password);

        try {
            this.setAuthenticating(true)
            const allUser=  await axios.get(`${BASE_URL}/users.json`)
            // console.log(allUser.data)

            const userId =Object.keys(allUser.data)
            const users =userId.map(userId=>{
                return{
                    ...allUser.data[userId],
                    id:userId
                }
            })
            // console.log(users);

            // const Total = JSON.parse('users')

            // console.log(Total['email']);

            const loginUser = users.find(u=>u.email===user.email)
            var err ="";
            // console.log(loginUser)

            if (loginUser){
                        if (loginUser.password===user.password){
                            // console.log(JSON.stringify(loginUser))
                            await AsyncStorage.setItem('authenticated', JSON.stringify(loginUser));
                            // this.setAuthUser(JSON.stringify(loginUser));
                            await this.loadUser()     // To remove error of not loading user info after login on Profile
                            this.setAuthenticated(true);
                            this.setAuthError(false)
                            this.setState({
                                ...this.state,
                                errorMessage:"",
                            })
                        }else {
                            this.setAuthenticated(false);
                            err="Email and Password didn't match";
                        }
                    }
                    else {
                        err="Email and Password did not match";
                    }
                    this.setState({
                        ...this.state,
                        errorMessage:err
                    })
                }catch (e){
                    console.log(e);
                    this.setAuthenticated(false)
                    this.setState({
                        ...this.state,
                        errorMessage:"Internet Problem!"
                    })
                }
                finally {
                    this.setAuthenticating(false)
                }
    }

    loadUser = async ()=>{
        const user =JSON.parse(await  AsyncStorage.getItem('authenticated'))
        this.setAuthUser(user)
    }



    logOut=async ()=>{
        await AsyncStorage.removeItem('authenticated');
        this.setAuthenticated(false)
        this.setAuthUser({})
        this.setAuthError(false)
        this.setState({
            ...this.state,
            errorMessage:'',
        })
    }

    addRestaurantData=async (restaurant)=>{
        console.log(restaurant)
        try {
            await axios.post(`${BASE_URL}/restaurants.json`,restaurant)
        }
        catch (e){
            console.log(e)
        }

    }

    addGroceriesData=async (grocery)=>{
        console.log(grocery)
        try {
            await axios.post(`${BASE_URL}/groceries.json`,grocery)
        }
        catch (e){
            console.log(e)
        }

    }





    setAllRestaurant=(restaurant) =>{
        this.setState({
            ...this.state,
            allRestaurant: restaurant
        })
    }

    setAllGroceries=(grocery) =>{
        this.setState({
            ...this.state,
            allGroceries: grocery
        })
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

                 setAllRestaurant:this.setAllRestaurant,
                 setAllGroceries:this.setAllGroceries,

                 signUpUserWithFirebase:this.signUpUserWithFirebase,
                 loginWithFirebase:this.loginWithFirebase,
                 logOut:this.logOut,


                 addRestaurantData:this.addRestaurantData,
                 addGroceriesData:this.addGroceriesData,


             }}>
                 {this.props.children}
             </AuthContext.Provider>
        )
    }
}

export default AuthProvider;
