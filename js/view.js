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
                if (namePage == "shop") {
                }
            }
        }
    }
}
view.makeAllBtnShow = function () {
    view.setUpPageViewBtn("sign-up-btn", "signUp")
    view.setUpPageViewBtn("sign-in-btn", "signIn")
    view.setUpPageViewBtn("shop-btn", "shop")
    view.setUpPageViewBtn("forgot-btn", "forgotPass")
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
            break;
        case 'updatePass':
            let newPass = document.getElementById("newPass")
            let validateResult = [
                view.validate(newPass != "", "password-error", "input password"),
                view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
            ]
            if (isPassed(validateResult)) {
                controller.updatePassword(newPass)
            }
            break;
        case 'shop':
            content.innerHTML = components.shop


            //CHỨC NĂNG GIỎ HÀNG

            //Khai báo DOM
            let showCart = document.getElementById("cart") //Nút giỏ hàng
            var modal = document.getElementById("myModal"); //Modal giỏ hàng 
            var close = document.getElementsByClassName("close")[0]; //Nút close X trong modal giỏ hàng
            var close_footer = document.getElementsByClassName("close-footer")[0]; //Nút "đóng" trong modal giỏ hàng
            var order = document.getElementsByClassName("order")[0]; //Nút "thanh toán" trong modal giỏ hàng

            //Xử lý khi click vào nút giỏ hàng hiển thị modal giỏ hàng => hiên thị model từ "none" sang "block"
            showCart.onclick = function () {
                modal.style.display = "block";
            }

            //Xử lý việc đóng (close) modal giỏ hàng => hiên thị model từ "block" sang "none"
            close.onclick = function () {
                modal.style.display = "none";
            }
            close_footer.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                //For test
                console.log(event.target) //event.target sẽ hiển thị thẻ mà chuột click vào
                //End test
                if (event.target === modal) {   
                    modal.style.display = "none";
                }
            }
            //Xử lý khi ấn nút thanh toán trong modal giỏ hàng
            order.onclick = function () {
                alert("Cảm ơn bạn đã thanh toán đơn hàng")
            }
            //CHỨC NĂNG ĐĂNG XUẤT
            let checkOut = document.getElementById("check-out")
            checkOut.onclick = function () {
                controller.checkOut()
                content.innerHTML = components.checkout
            }
            break;
        case 'single':
            content.innerHTML = components.single
            break;
    }
}