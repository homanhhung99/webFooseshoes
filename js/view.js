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
        case 'signIn':
            break;
        case 'signUp':
            break;
        case 'checkout':
            break;
        case 'forgotpass':
            break;
        case 'shop':
            break;
        case 'single':
            break;
    }
}