window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");   
let specialBtn = document.getElementById("specialBtn");                           
let provider = new firebase.auth.GithubAuthProvider();
                           
                             
console.log("Innan event.");
                           
signin.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log("Vi testar användare: " + result.user);
     
        if(result.user != null){
            
            let user = result.user;
            let data = JSON.parse(user);    
            
            let status = document.getElementById("status");
            status.innerHTML = "You are logged in as: " + data.displayName;
            
            signin.disabled = true;
            
            console.log("Inloggning lyckades med status: " + result.user);
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
    firebase.auth().signOut()
        .then(function(result) {
    status.innerHTML = "You are logged out!";
    console.log("Utloggning lyckades: " + result);
   
})
.catch(function(error) {
    console.log("Utloggning misslyckades: " +error);
});
})
}