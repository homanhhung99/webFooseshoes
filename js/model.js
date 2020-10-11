let model = {
    listProduct:[],
    listInforData:[]
}

model.saveCurrentProductData = function (productData) {
    model.listProduct.push(productData)
}
model.saveCurrentInforData = function(infor)
{
    model.listInforData = infor
}

