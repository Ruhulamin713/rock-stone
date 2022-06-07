import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlqoGQDppQPPfSl4PDNSWagtt1IwzpemI",
  authDomain: "rock-stone-11a9c.firebaseapp.com",
  projectId: "rock-stone-11a9c",
  storageBucket: "rock-stone-11a9c.appspot.com",
  messagingSenderId: "182961961181",
  appId: "1:182961961181:web:1292a488849c21abbcc334",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
