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
        console.log(firebase.auth().currentUser.displayName)
    }catch(error)
    {
        view.setText("sign-in-error",error.message)
        view.setActive("sign-in-btn",true)
    }
}

controller.loadData = async function()
{
    let result = await firebase.firestore().collection('Products').get()
    let data = []
    for(let doc of result.docs){
        // console.log(result)
        // console.log(refineData(doc))
        data.push(refineData(doc))
        // console.log(data)
    }
    return data
}

controller.order = async function(data,firstName,lastName,phone,address,city,zip)
{
    let newData = {
        data,
        firstName,
        lastName,
        phone,
        address,
        city,
        zip
    }
    await firebase.firestore().collection("data").add(newData);
    console.log("đã gửi thành công")
}

controller.forgotPass = async function (email){
    view.setText("emailForgot-error","")
    view.setActive("send-pass-btn",false)

    try{
        await firebase.auth().sendPasswordResetEmail(email)
        view.setText("emailForgot-error","Email successfully sent!")
        console.log("Gửi email reset pass thành công")
    }
    catch(error)
    {
        view.setText("emailForgot-error",error.message)
        view.setActive("send-pass-btn",true)
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
    try{

        await firebase.auth().signOut();
    }catch(error)
    {
        console.log(error)
    }
}