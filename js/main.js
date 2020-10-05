window.onload = function() {
    view.showScreen("main");
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if(user != null) {
            view.showScreen("shop");
        } else {
            view.showScreen("signIn");
        }
    });
}