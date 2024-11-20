import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD66GwnhFco1s8Lyy1HfnC1vdABlYrp2vQ",
  authDomain: "tui-kozyatyn1.firebaseapp.com",
  databaseURL:
    "https://tui-kozyatyn1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tui-kozyatyn1",
  storageBucket: "tui-kozyatyn1.appspot.com",
  messagingSenderId: "432539934219",
  appId: "1:432539934219:web:906bbac9fdbec94a32310e",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
