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
            let signUpLink = document.getElementById("sign-up-link")
            signUpLink.onclick = function()
            {
                view.showScreen("signUp")
            }
            let signInLink = document.getElementById("sign-in-link")
            signInLink.onclick = function()
            {
                view.showScreen("signIn")
            }
            break;
        case 'signIn':
            let signUpLink1 = document.getElementById("sign-up-link")
            signUpLink1.onclick = function()
            {
                view.showScreen("signUp")
            }   
            content.innerHTML = components.signIn
            let showCart = document.getElementById("cart")
            showCart.style.opacity = "0"
            let formSignIn = document.getElementById('form-sign-in')
            document.getElementById("check-out").onclick = function () {
                controller.signOut();
            }
            formSignIn.onsubmit = function(event)
            {
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
            // Modal      var modal = document.getElementById("myModal");
                var btn = document.getElementById("cart");
                var close = document.getElementsByClassName("close")[0];
                // tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
                // Nếu mình có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
                var close_footer = document.getElementsByClassName("close-footer")[0];
                var order = document.getElementsByClassName("order")[0];
                btn.onclick = function () {
                modal.style.display = "block";
                }
                close.onclick = function () {
                modal.style.display = "none";
                }
                close_footer.onclick = function () {
                modal.style.display = "none";
                }
                order.onclick = function () {
                alert("Cảm ơn bạn đã thanh toán đơn hàng")
                }
                window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                }
            break;
        case 'signUp':
            content.innerHTML = components.signUp
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
        case 'forgotpass':
            content.innerHTML = components.forgotpass
            break;
        case 'shop':
            content.innerHTML = components.shop
            let checkOut = document.getElementById("check-out")
            checkOut.onclick = function(){
                controller.checkOut()
                content.innerHTML = components.checkout
            }
            break;
        case 'single':
            content.innerHTML = components.single
            break;
    }
}