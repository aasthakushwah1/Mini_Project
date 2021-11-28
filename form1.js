// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAxnqkPFgZHYTSKV78VRsycoO8SSB5nFpk",
  authDomain: "safety-plus-bcced.firebaseapp.com",
  projectId: "safety-plus-bcced",
  storageBucket: "safety-plus-bcced.appspot.com",
  messagingSenderId: "248642532614",
  appId: "1:248642532614:web:736bda5e7bcbcab2611a87",
  measurementId: "G-46MN3HPPLE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    // window.location.replace("./login.html");
  }

//   signIN function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
    
//   }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })