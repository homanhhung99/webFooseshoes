let controller = {}
controller.signIn = async function (email, password)
{
    //xí xóa
    view.settext("sign-in-error","")
    view.setActive("register-submit",false);
    try
    {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("sign in successfully")


    }
    catch(error)
    {
        view.setText("sign-in-error", error.message);
        view.setActive("register-submit", true);
    }
}

controller.signUp = async function(name,sdt,email,password)
{
    view.setText("sign-up-error","")
    view.setText("sign-up-success","")
    view.setActive("sign-up-xxx",false)
    try{
        await firebase.auth().createUserEmailAndPassword(email,password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name,
            phoneNumber: sdt
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText("sign-up-success","An email verification has been sent")

    }catch(error){
        view.setText("sign-up-error",error.message)
    }
    view.setActive("sign-up-xxx",true)
    //kết thúc đăng kí tài khoản
}
controller.fogotPassword = async function(email, sdt)
{
    view.settext("fogotPassword-error","")
    view.setActive("fogotPass-xxx","")
    try{
        await firebase.auth.sendPasswordResetEmail(email)
    }catch(error)
    {

    }
}
controller.signOut = async function () {
    firebase.auth().signOut();
    console.log("Đăng xuất thành công")
}