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
view.setUpPageViewBtn = async function (classBtn, namePage) {
    let allBtn = document.getElementsByClassName(classBtn)
    if (allBtn.length > 0) {
        for (let i = 0; i < allBtn.length; i++) {
            allBtn[i].onclick = async function () {
                await view.showScreen(namePage)
            }
        }
    }
}
view.makeAllBtnShow = function () {
    view.setUpPageViewBtn("sign-up-btn", "signUp")
    view.setUpPageViewBtn("sign-in-btn", "signIn")
    view.setUpPageViewBtn("shop-btn", "shop")
    view.setUpPageViewBtn("forgot-btn", "forgotPass")
    view.setUpPageViewBtn("cart-btn", "cart")
    view.setUpPageViewBtn("order-btn", "order")
}
view.showScreen = async function (screenName) {
    let content = document.getElementById('content')
    switch (screenName) {
        case 'main':
            content.innerHTML = components.main
            view.makeAllBtnShow()
            break;
        case 'signIn':
            content.innerHTML = components.signIn
            view.makeAllBtnShow()
            let formSignIn = document.getElementById('form-sign-in')
            formSignIn.onsubmit = function (event) {
                event.preventDefault()
                let email = formSignIn.email.value;
                let password = formSignIn.password.value;
                let validateResult = [
                    view.validate(email != "", "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input your password")
                ];
                if (isPassed(validateResult)) {
                    // gửi dữ liệu qua controller
                    controller.signIn(email, password);
                }
            }
            break;
        case 'signUp':
            content.innerHTML = components.signUp
            view.makeAllBtnShow()
            let formSignUp = document.getElementById('form-sign-up');
            formSignUp.onsubmit = function (event) {
                event.preventDefault();
                // console.log("Form đăng kí vừa được submit");
                // lấy dữ liệu từ form
                let name = formSignUp.name.value.trim();
                let email = formSignUp.email.value.trim();
                let password = formSignUp.password.value.trim();
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim();

                // kiểm tra dữ liệu
                let validateResult = [
                    view.validate(name != "", "name-error", "Input your name"),
                    view.validate(email != "" && validateEmail(email), "email-error", "Invalid email"),
                    view.validate(password != "", "password-error", "Input password"),
                    view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
                ];

                // console.log(validateResult);
                // console.log(isPassed(validateResult));

                // nếu dữ liệu thỏa mãn --> gửi dữ liệu
                if (isPassed(validateResult)) {
                    // gửi dữ liệu qua controller
                    controller.signUp(name, email, password);
                }

            }
            break;
        case 'forgotPass':
            content.innerHTML = components.forgotpass
            let formForgotPass = document.getElementById('form-forgot-pass')
            formForgotPass.onsubmit = function(event)
            {
                console.log(formForgotPass)
                event.preventDefault()
                let email = formForgotPass.email.value.trim()
                let validateResult = [
                    view.validate(email != "" && validateEmail(email), "emailForgot-error", "Invalid email")
                ]
                if(isPassed(validateResult)){
                    controller.forgotPass(email)
                }
            }
            view.makeAllBtnShow()
            break;
        // case 'updatePass':
        //     let newPass = document.getElementById("newPass")
        //     let validateResult = [
        //         view.validate(newPass != "", "password-error", "input password"),
        //         view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
        //     ]
        //     if (isPassed(validateResult)) {
        //         controller.updatePassword(newPass)
        //     }
        //     break;
        case 'shop':
            content.innerHTML = components.shop
            view.makeAllBtnShow()
            let addToCart = document.getElementById("add-to-cart")
            addToCart.onclick = function()
            {

            }
            await controller.loadData()
            console.log("load xong")
            //thoát tài khoản
            let checkOut = document.getElementById("check-out")
            checkOut.onclick = function () {
                controller.checkOut()
            }
            break;
        case 'cart':
            content.innerHTML = components.cart
            let backShop = document.getElementById("back-shop")
            backShop.onclick = function()
            {
                view.showScreen("shop")
            }
            view.makeAllBtnShow()
            break;
        case 'order':
            content.innerHTML = components.inforDataProduct
            let formOrder = document.getElementById("form-inforDataProduct")
            formOrder.onsubmit = function(event)
            {
                event.preventDefault()
                let firstName = formOrder.firstName.value.trim()
                let lastName = formOrder.lastName.value.trim()
                let phone = formOrder.phone.value.trim()
                let address = formOrder.address.value.trim()
                let city = formOrder.city.value.trim()
                let zip = formOrder.zip.value.trim()
                
                let validateResult = [
                    view.validate(firstName != "", "firstName-error", "Please enter your first name!"),
                    view.validate(lastName != "", "lastName-error", "Please enter your last name!"),
                    view.validate(phone != "", "phone-error", "Please enter your phone"),
                    view.validate(address != "", "address-error", "Please provide a valid Address."),
                    view.validate(city != "", "city-error", "Please select a valid city."),
                    view.validate(zip != "", "zip-error", "Please provide a valid zip."),
                ]
                if(isPassed(validateResult)){
                    controller.order()
                }
            }
            view.makeAllBtnShow()
    }
}
