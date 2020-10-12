let model = {
	listProduct:[],
	totalMoney: 0,
    listInforData:[]
}

model.saveCurrentProductData = function (productData) {
	if(model.listProduct.length === 0){
   		model.listProduct.push(productData)
	}else{
		let product = model.listProduct.filter(product=> product.id === productData.id)[0];
		if(!product){
   			model.listProduct.push(productData)
		}else{
			product.Count++
			product.total+=product.price
			console.log({product})
		}
	}
}
model.saveCurrentInforData = function(infor)
{
    model.listInforData = infor
}

