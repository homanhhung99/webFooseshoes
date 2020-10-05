let view = {}
//condition = tình trạng
//ErrorTag = Thẻ lỗi
//Message = Thông điệp
view.validate = function (condition, errorTag, message)
{
    if(!condition)//nếu khác với giá trị true là giá trị rỗng hoặc không đúng cú pháp
    {
        view.settext(errorTag, message)//in ra lỗi
        {
            return false
        }
    }else
    {
        view.settext(errorTag, "")//nếu không rỗng thì không in gì cả
        return true
    }
}
//hàm in ra text
view.settext = function(tagId,text)
{
    document.getElementById(tagId).innerHTML = text
}
//hàm kích hoạt vô hiệu quá
view.setActive = function(tagId,active)
{
    document.getElementById(tagId).disabled = !active;
}
//hàm show everything
view.showScreen = function(screenName)
{
    let content = document.getElementById('content')
    switch(screenName)
    {
        case 'signIn':
            content.innerHTML = components.signIn
            let signUpLink = document.getElementById('sign-up-link')
            //sự kiện click link đăng kí
            signUpLink.onclick = function()
            {
                view.showScreen("signUp")
            }
            //xử lý form đăng nhập
            let formSignIn = document.getElementById('form-sign-in')
            formSignIn.onsubmit = function(event)
            {
                event.preventDefault();
                console.log('Đã vào ngon')
                let email = formSignIn.email.value;
                let password = formSignIn.password.value
                //kiểm tra
                let validateResult = [
                    view.validate(email !="","email-error","Input your email"),
                    view.validate(password != "","password-error","Input your password")
                ];
                if(isPassed(validateResult)){
                    controller.signIn(email,password)
                }
            }
            break;
        case 'signUp':
            //Hiển thị giao diện sign Up
            content.innerHTML = components.signUp;
            let signInLink = document.getElementById('sign-in-link')
            signInLink.onclick = function(){
                view.showScreen("signIn")
            }
            //xử lý form sign up
            let fromSignUp = document.getElementById('form-sign-up')
            formSignIn.onsubmit = function(event)
            {
                event.preventDefault()
                //lấy dữ liệu từ form
                let name = fromSignUp.name.value.trim()
                let sdt = formSignIn.sdt.value.trim()
                let email = fromSignUp.email.value.trim()
                let password = fromSignUp.password.trim();
                let passwordConfimation = fromSignUp.passwordConfimation.trim()
                let validateResult = [
                    view.validate(name != "", "name-error", "Input your name"),
                    view.validate(sdt != "" && isNumber(sdt),"phone-error","Error phone number"),
                    view.validate(email != "" && validateEmail(email), "email-error", "Invalid email"),
                    view.validate(password != "", "password-error", "Input password"),
                    view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
                ]
                if(isPassed(validateResult))
                {
                    controller.signUp(name,sdt,email,password)
                }
            }
            break;
        case 'fogotPassword':
            content.innerHTML = components.fogotPassword
            let signInLink = document.getElementById('sign-in-link')
            signInLink.onclick = function(){
                view.showScreen("signIn")
            }
            //xử lý form fogot password
            let formFogotPassword = document.getElementById('form-fogot-password')
            formFogotPassword.onsubmit = function(event)
            {
                event.preventDefault()
                let email = formFogotPassword.email.value.trim()
                let sdt = formFogotPassword.sdt.value.trim()
                let validateResult = [
                    view.validate(email !="","email-error","Email không tồn tại"),
                    view.validate(sdt != "","sdt-error","sdt không tồn tại")
                ]
                if(isPassed(validateResult))
                {
                    controller.signUp(name,sdt,email,password)
                }
            }
    }
}
