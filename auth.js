window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");
                        
let provider = new firebase.auth.GithubAuthProvider();
                             
console.log("Innan event.");                             
signin.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log("Vi testar Sara: " + result.user);
     
        if(result.user != null){
            
            let user = JSON.stringify(result.user);
            let data = JSON.parse(user);    
            
            let status = document.getElementById("status");
            status.innerHTML = data.displayName;
            
            let image = document.getElementById("divImage");
            //image.setAttribute("src", data.photoURL);
            localstorage.getItem("image", data.photoURL);
            
            console.log(result.user);
            console.log("photoURL: " + data.photoURL);
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
    delete sessionStorage.user;
    status.innerHTML = "You are logged out!";
    console.log(result);
   
})
.catch(function(error) {
    console.log(error);
});
})
}