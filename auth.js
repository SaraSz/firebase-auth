window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");   
let specialBtn = document.getElementById("specialBtn");                           
let provider = new firebase.auth.GithubAuthProvider();
                           
let user = JSON.stringify(result.user);
                             
console.log("Innan event.");
                           
signin.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log("Vi testar användare: " + result.user);
     
        if(result.user != null){
            
            signin.disabled = true;

            let data = JSON.parse(user);    
            
            let status = document.getElementById("status");
            status.innerHTML = "You are logged in as: " + data.displayName;
            
            console.log(result.user);
        }
            
        else if(user === undefined || user === null){
            signout.disabled = true;
            }
      
    })
    .catch((error)=>{
        console.log(error);
    });
})

//Logga ut den autentiserade användaren
signout.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    firebase.auth().signOut()
        .then(function(result) {
    //localStorage.removeItem("user", user);
    status.innerHTML = "You are logged out!";
    console.log(result);
   
})
.catch(function(error) {
    console.log(error);
});
})
}