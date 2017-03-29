window.onload = function(){ "use strict";
                           
let signin = document.getElementById("signin");
let signout = document.getElementById("signout");
                        
let provider = new firebase.auth.GithubAuthProvider();
                             
                             
signin.addEventListener("click", function(event){
    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log(result);
        
     let data = result.user;
            
            if(data === undefined || user === null){
            signout.disabled = true;
            }
/*
    let data = result.user;
    if(data ===  undefined || data === null){
        loggut.disabled = true;  
    }else{
       let userInfo = document.getElementById(”userInfo”) ;
      let data = result.user;
     userInfo.innerHTML = data.displayName;
     let imageDiv = document.getElementById(”imageDiv”);
     imageDiv.setAttribute( 'src', data.photoURL );
   }
}
 })*/       
    else {
       
        //let data = result.user;        
        let status = document.getElementById("status");
        status.innerHTML = data.displayName;
        let image = document.getElementById("divImage");
        image.setAttribute('src', data.photoURL);
        console.log(user);
    }
                   
    })
    .catch((error)=>{
        console.log(error);
    });
})

// Logga ut den autentiserade användaren
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