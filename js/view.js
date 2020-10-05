let view = {};

view.validate = function (condition, errorTag, message) {
    if (!condition) {
        // document.getElementById(errorTag).innerHTML = message;
        view.setText(errorTag, message);
        return false;
    } else {
        // document.getElementById(errorTag).innerHTML = "";
        view.setText(errorTag, "");
        return true;
    }
}

view.setText = function (tagId, text) {
    document.getElementById(tagId).innerHTML = text;
}

view.setActive = function (tagId, active) {
    document.getElementById(tagId).disabled = !active;
}

view.showScreen = async function(screenName)
{
    let content = document.getElementById('content')
    switch(screenName)
    {
        case 'main':
            content.innerHTML = components.main
            break;
        case 'signIn':
            content.innerHTML = components.signIn
            let signUpLink = document.getElementById('sign-up-link')
            signUpLink.onclick = function()
            {
                view.showScreen("signUp")
            }
            let formSignIn = document.getElementById('form-sign-in')
            formSignIn.onsubmit = function(event)
            {
                event.preventDefault()
            }
            break;
        case 'signUp':
            content.innerHTML = components.signUp
            break;
        case 'checkout':
            content.innerHTML = components.checkout
            break;
        case 'forgotpass':
            content.innerHTML = components.forgotpass
            break;
        case 'shop':
            content.innerHTML = components.shop
            break;
        case 'single':
            content.innerHTML = components.single
            break;
    }
}