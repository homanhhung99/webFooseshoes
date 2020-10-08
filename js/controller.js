let controller = {}

controller.signUp = async function (name, email, password){
//xóa thông báo lỗi và thành công ở quành trình sign up cũ
    view.setText("sign-up-error","")
    view.setText("sign-up-success","")
    view.setActive("sign-up-btn",false)
    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText("sign-up-success","An Email verification has been sent")
    }catch(error)
    {
        view.setText("sign-up-error",error.message)
    }
}
controller.signIn = async function (email, password){
    view.setText("sign-in-error","")
    view.setActive("sign-in-btn",false)
    let cart = document.getElementById("cart")
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        cart.style.opacity = "1"
        console.log(firebase.auth().currentUser.displayName)
    }catch(error)
    {
        view.setText("sign-in-error",error.message)
        view.setActive("sign-in-btn",true)
    }
}

controller.Shop = async function (count, id){

}

//DONE
controller.forgotPass = async function (email){
    view.setText("email-error","")
    view.setActive("email-btn",false)
    try{
        await firebase.auth().sendPasswordResetEmail(email)
        console.log("Gửi email reset pass thành công")
    }
    catch(error)
    {
        view.setText("email-error","email-error")
        console.log("Lỗi khi gửi email reset pass.",error)
    }
}
// controller.updatePassword = async function(pass)
// {
//     try{
//         await firebase.auth().currentUser.updatePassword(pass)
//     }
    

// }
controller.checkOut = async function (){
    await firebase.auth().signOut();
}