window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");
                        
let provider = new firebase.auth.GithubAuthProvider();
                             
                             
signin.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log(result);
     let user = sessionStorage.user;
        if(result.user != null){
            window.sessionStorage.user = JSON.stringify(result.user);
            
        if(user === undefined || user === null){
            signout.disabled = true;
            }
        
    else {
       
        let data = JSON.parse(user);        
        let status = document.getElementById("status");
        status.innerHTML = data.displayName;
        let image = document.getElementById("divImage");
        image.setAttribute('src', data.photoURL);
        console.log(user);
    }
        }
    })
    .catch((error)=>{
        console.log(error);
    });
})

// Logga ut den autentiserade användaren
firebase.auth().signOut()
.then(function(result) {
    console.log(result);
   
})
.catch(function(error) {
    console.log(error);
});

}