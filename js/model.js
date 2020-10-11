let model = {
    listProduct:[],
    listInforData:[]
}

model.saveCurrentProductData = function (productData) {
    model.listProduct = productData
}
model.saveCurrentInforData = function(infor)
{
    model.listInforData = infor
}