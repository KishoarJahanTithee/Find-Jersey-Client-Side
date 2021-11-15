import { display } from "@mui/system";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged, getIdToken
} from "firebase/auth";
import {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {


  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const  [token, setToken] = useState('');

  const auth = getAuth();

  const location = useLocation();
  const history = useHistory();
    const redirect_url = location?.state?.from || '/';

 


  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError(''); 
        const newUser = {email};
        setUser(newUser);
        saveUser(email, 'POST');
      })
      .catch((error) => {
        setAuthError(error.message);
        
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const destination = location?.state?.from || '/';
          history.replace(destination);
       setAuthError(''); 
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };


  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, 'PUT');
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
               setToken(idToken);
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);


  useEffect(()=>{
     fetch(`http://localhost:5000/users/${user.email}`)
     .then(res=>res.json())
     .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, method) =>{
       const user = {email};
       fetch('http://localhost:5000/users',{
         method: method,
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(user)
       })
       .then()
  }

  return {
    authError,
    user,
    admin,
    token,
    isLoading,
    registerUser,
    loginUser,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
