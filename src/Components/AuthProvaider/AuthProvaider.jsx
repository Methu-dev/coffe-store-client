import { createContext, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContex = createContext(null)

const auth = getAuth(app);

const AuthProvaider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoding] = useState(true)

   const createUser = (email, password)=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }

       const signIn = (email, password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
       }

   const userInfo = { user, createUser, loading, signIn };



  return (
    <AuthContex.Provider value={userInfo}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthProvaider
