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
                console.log(classBtn)
                await view.showScreen(namePage)
            }
        }
    }
}

view.makeAllBtnShow = function () {
    view.setUpPageViewBtn("sign-up-btn", "signUp")
    view.setUpPageViewBtn("sign-in-btn", "signIn")
    view.setUpPageViewBtn("forgot-btn", "forgotPass")
}

view.orderAndPay = function()
{
    view.setUpPageViewBtn("cart-btn", "cart")
    view.setUpPageViewBtn("order-btn", "order")
}
view.makeProfile = function()
{
    view.setUpPageViewBtn("shop-btn", "shop")
    view.setUpPageViewBtn("cart-btn", "cart")
    // view.setUpPageViewBtn("order-btn", "order")
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
                //nhập dữ liệu và lấy giá trị
                let email = formSignIn.email.value;
                let password = formSignIn.password.value;
                let validateResult = [
                    view.validate(email != "" && validateEmail(email), "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input your password")
                ];
                if (isPassed(validateResult)) {//nếu đúng và đủ định dạng thì đến phần controller xử lý trong firebase
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
            //Form nhập quên pass
            formForgotPass.onsubmit = function(event)
            {
                console.log(formForgotPass)
                event.preventDefault()
                //nhập email
                let email = formForgotPass.email.value.trim()
                let validateResult = [
                    //kiểm tra xem có đúng định dạng của email và rỗng
                    view.validate(email != "" && validateEmail(email), "emailForgot-error", "Invalid email")
                ]
                
                if(isPassed(validateResult)){//nếu == True ( nghìa là đúng định dạng email và phần tử không rỗng)
                    controller.forgotPass(email)//chuyển sang mục controller để xử lý trong firebase
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
            view.makeProfile()
            let getName = document.getElementById("myNameAccount")
            let addToCart1 = document.getElementById("add-to-cart1")
            let addToCart2 = document.getElementById("add-to-cart2")
            let data =  await controller.loadData()   // console.log(data)//Lấy dữ liệu data về
            getName.innerHTML = ": "+firebase.auth().currentUser.displayName //Hiển thị tên người dùng
            // lấy sản phẩn 2
            addToCart1.onclick = function()
            {
                model.saveCurrentProductData(data[0])
                console.log(model.listProduct)
            }
            //lấy sản phẩn 2
            addToCart2.onclick = function()
            {
                model.saveCurrentProductData(data[1])
                console.log(model.listProduct)
            }   
            //thoát tài khoản
            let checkOut = document.getElementById("check-out")
            checkOut.onclick = function () {
                controller.checkOut()
            }
            break;
        case 'cart':
            content.innerHTML = components.cart
            view.makeProfile()
            //Hàm sử dụng để View tăng giảm số lượng trong giỏ hàng
            cartItems()
            let backShop = document.getElementById("back-shop")
            backShop.onclick = function()
            {
                view.showScreen("shop")
            }
            //Nếu giỏ hàng có hàng thì được truy cập vào trang Order (Thông tin người nhận)
            if(model.listProduct.length != 0)
            {
                view.orderAndPay()
            }
            else//nếu không có hàng thì sẽ không vào được và thông báo cho người dùng là bạn chưa có hàng
            {
                alert("Your shopping cart is empty!")
                view.makeProfile()
            }
            break;
        case 'order':
            content.innerHTML = components.inforDataProduct
            view.makeProfile()
            let formOrder = document.getElementById("form-inforDataProduct")
            formOrder.onsubmit = function(event)
            {
                //nhập và lấy dữ liệu từ input
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
                    view.validate(phone != "" && phonenumber(phone) && isLengthPhone(phone), "phone-error", "Your phone number is wrong or you have not entered information yet!"),
                    view.validate(address != "", "address-error", "Please provide a valid Address."),
                    view.validate(city != "", "city-error", "Please select a valid city."),
                    view.validate(zip != "" && !isNaN(zip) && isLengthZip(zip), "zip-error", "Please provide a valid zip."),
                ]
                console.log(phonenumber(phone))
                console.log(!isNaN(phone))
                if(isPassed(validateResult) && model.listProduct.length != 0){
                    //nếu có dữ liệu và giỏ hàng khác 0 thì chuyển qua controller xử lý
                    controller.order(model.listProduct,firstName,lastName,phone,address,city,zip)
                }
                else
                {
                    //thông báo lỗi giỏ hàng ko có
                    view.setText("pay-error","You cannot submit this order!")
                }
            }
            break;
    }
}
function cartItems()
{
    let showListCarts = document.getElementById("show-list-carts")
    let showTotal = document.getElementById("Total")
    let totalMoney = 0
    showListCarts.innerHTML =""
    for(let data of model.listProduct){
        let html = `
        <tr id="product${data.id}"> 
        <td data-th="Product"> 
         <div class="row"> 
          <div class="col-sm-2 hidden-xs"><img src="${data.urlImg}">
          </div> 
          <div class="col-sm-10"> 
           <h4 class="nomargin">${data.nameProduct}</h4> 
           <p>Description of Product 1</p> 
          </div> 
         </div> 
        </td> 
        <td data-th="Price">${data.price}</td> 
        <td data-th="Quantity"><input class="form-control text-center" id ="Count${data.id}" value="${data.Count}" type="number">
        </td> 
        <td data-th="Subtotal" class="text-center" id = "totalOneProduct${data.id}">${data.price*data.Count}</td> 
        <td class="actions" data-th="">
         </button> 
         <button id="detele${data.id}" onclick="myFunction()" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i>
         </button>
        </td> 
       </tr>
        `
        totalMoney += data.price*data.Count
        model.totalMoney = totalMoney
        showListCarts.innerHTML += html
    }
    showTotal.innerHTML = totalMoney
    for(let datas of model.listProduct)
    {
        let getIdDelete = document.getElementById("detele"+datas.id)
        getIdDelete.onclick = function()
        {
            let getIdProduct = document.getElementById("product"+datas.id)
            getIdProduct.remove()
            //Xóa dữ liệu đơn hàng
            let index = model.listProduct.findIndex(x=>x.id === datas.id)
            console.log("Có index ở vị trí là: "+index)
            model.listProduct.splice(index,1)
            console.log(model.listProduct)
            //Xóa hiển thị tổng số tiền
            model.totalMoney = model.totalMoney - datas.price*datas.Count
            showTotal.innerHTML = model.totalMoney
        }
        let getIdCount = document.getElementById("Count"+datas.id)
        getIdCount.onchange = function()
        {
            if(getIdCount.value ==0)
            {
                let getIdProduct = document.getElementById("product"+datas.id)
                getIdProduct.remove()
                let index = model.listProduct.findIndex(x=>x.id === datas.id)
                console.log("Có index ở vị trí là: "+index)
                model.listProduct.splice(index,1)
                model.totalMoney = model.totalMoney - datas.price*datas.Count
                showTotal.innerHTML = model.totalMoney
                console.log(model.listProduct)
            }
            else
            {
                let sum = 0
                let showTotalOneProduct = document.getElementById("totalOneProduct"+datas.id)
                let totalProduct = datas.price*getIdCount.value // Tính tổng trên 1 sản phẩm
                // console.log(totalProduct)
                showTotalOneProduct.innerHTML = totalProduct//SHOW KẾT QUẢ CỦA 1 SẢN PHẨM
                let index = model.listProduct.findIndex(x=>x.id === datas.id)
                //Tính tổng sản phẩm mới thay đổi số lượng
                sum += datas.price*getIdCount.value
                console.log(sum)
                datas.total = sum
                model.listProduct[index].total = sum
    
    
                // console.log(`gia tri ${model.listProduct[index].total}`)
                // console.log("giá trị totalMoney là:" + totalMoney)
                // console.log("giá trị getIdCount.value là:" + getIdCount.value)
                // console.log("giá trị listProduct[index].Count là:" + model.listProduct[index].Count)
                // console.log("giá trị datas.price là:" + datas.price)
    
                //GÁN CHO BIẾN TỔNG SẢN PHẨM TOÀN BỘ SẢN PHẨM
                if(model.listProduct.length==1)
                {
                    totalMoney = sum// + (getIdCount.value-model.listProduct[index].Count)*datas.price
                    // console.log("giá trị totalMoney là:" + totalMoney)
                    model.listProduct[index].Count = getIdCount.value//gán lại giá trị tại model
                    console.log(model.listProduct)
                    // console.log(totalMoney)
                    // console.log("Giá trị index của "+datas.id+" là: "+model.listProduct[index].Count)
                    // console.log("Giá trị của "+datas.id+" Index: "+datas.Count)
                    model.totalMoney = totalMoney
                    console.log("Giá trị total: "+ model.totalMoney)
                    showTotal.innerHTML = model.totalMoney
                }
                else
                {
                    totalMoney = totalMoney + (getIdCount.value-model.listProduct[index].Count)*datas.price
                    // console.log("giá trị totalMoney là:" + totalMoney)
                    model.listProduct[index].Count = getIdCount.value//gán lại giá trị tại model
                    console.log(model.listProduct)
                    // console.log(totalMoney)
                    // console.log("Giá trị index của "+datas.id+" là: "+model.listProduct[index].Count)
                    // console.log("Giá trị của "+datas.id+" Index: "+datas.Count)
                    model.totalMoney = totalMoney
                    console.log("Giá trị total: "+ model.totalMoney)
                    showTotal.innerHTML = model.totalMoney
                }
            }
        }
    }
}