window.addEventListener("scroll", function(){
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("sticky", this.window.scrollY>50)
});

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { getStorage } from 
"https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

import {
    ref,
    uploadString,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyA-VjVjT-vozobawNu-83pWfgPqqWb91KI",
    authDomain: "gymsite-88c5a.firebaseapp.com",
    projectId: "gymsite-88c5a",
    storageBucket: "gymsite-88c5a.appspot.com",
    messagingSenderId: "80637572024",
    appId: "1:80637572024:web:62c3bab767887ad818554d"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const formfeed = document.getElementById("feedback");
const nam = document.getElementById("name");
const ema = document.getElementById("email");
const msg = document.getElementById("message");

formfeed.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = nam.value;
    const emailid = ema.value;
    const msgs = msg.value;

    const data = {
        user,
        emailid,
        msgs,
    };

    const name = user;
    const usref = ref(storage, `gymsite/${name}`);
    
    if(user.length>0&&emailid.length>0){
        uploadString(usref, JSON.stringify(data))
        .then((snapshot) => {
            console.log("Upload successful");
            // You can also retrieve the download URL if needed
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("Download URL:", downloadURL);
            });
        })
        .catch((error) => {
            console.error("Error uploading data:", error);
        });
        document.querySelector(".alert").style.display = "block";
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        },3000);
        document.getElementById("feedback").reset();
    }
    else{
        document.querySelector(".error").style.display = "block";
        setTimeout(() => {
            document.querySelector(".error").style.display = "none";
        },2000);
        document.getElementById("feedback").reset();
    }
});


