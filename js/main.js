window.onload = function() {
    view.showScreen("index");
    
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if(user != null) {
            view.showScreen("products");
        } else {
            view.showScreen("signIn");
        }
    });
}