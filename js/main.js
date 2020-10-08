window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if(user != null) {
            view.showScreen("shop");
        } else {
            view.showScreen("main");
        }
    });
}