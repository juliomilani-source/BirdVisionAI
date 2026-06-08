import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-KJIu4K96Mt6Wa1VaP00RLkkhRx8e0Aw",
  authDomain: "birdvisionai-a69.firebaseapp.com",
  databaseURL: "https://birdvisionai-a69-default-rtdb.firebaseio.com/",
  projectId: "birdvisionai-a69",
  storageBucket: "birdvisionai-a69.firebasestorage.app",
  messagingSenderId: "230782122249",
  appId: "1:230782122249:web:423a5baf9c663b899cbbd8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {
  db,
  ref,
  push,
  set,
  onValue
};