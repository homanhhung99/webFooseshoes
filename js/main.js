window.onload =  function() {
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user != null && user.emailVerified) {
            view.showPage("index")
            
        } else {
            view.showPage("signIn")
        }
    })
}
