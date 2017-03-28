window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");
let status = document.getElementById("status");
                         
let provider = new firebase.auth.GithubAuthProvider();
                             
                             
signin.addEventListener("click", function(event){
firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log(result);
        let user = result.user;
    })
    .catch((error)=>{
        console.log(error);
    });
})

}