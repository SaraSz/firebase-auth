window.onload = function(){ "use strict";
                           
let signinBtn = document.getElementById("signinBtn");
let signoutBtn = document.getElementById("signoutBtn");   
let specialBtn = document.getElementById("specialBtn");                           
let provider = new firebase.auth.GithubAuthProvider();
let status = document.getElementById("status");

                           
specialBtn.disabled = true;                             
console.log("Innan event."); 
                           
signinBtn.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider).then(function(result){
        
        let user = result.user;
        console.log("Vi testar användare: " + result.user);
     
        if(result.user != null){    
            
            status.innerHTML = "You are logged in as: " + user.displayName;
            
            specialBtn.disabled = false;
            
            console.log("Inloggning lyckades med status: " + result.user);
        }
            
        else if(user === undefined || user === null){
            status.innerHTML = "Sorry, something went wrong.";
            }
      
    })
    .catch((error)=>{
        console.log(error);
    });
})

//Logga ut den autentiserade användaren
signoutBtn.addEventListener("click", function(event){
    firebase.auth().signOut()
        .then(function(result) {
    status.innerHTML = "You are logged out!";
    console.log("Utloggning lyckades!");
    signoutBtn.disabled = true;
   
})
.catch(function(error) {
    console.log("Utloggning misslyckades!");
    status.innerHTML = "Sign out failed.";
});
})
}
