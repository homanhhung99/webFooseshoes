let model = {
    currentUserData: {
        email: "",
        name: "",
        balance: 0
    },
}
let product = {
    id: "",
    name: "",
    price: "",
    details: ""
}

model.saveCurrentUserData = function (userData) {
    model.currentUserData = userData
}

model.saveGuestData = function (userData) {
    model.guestData = userData
}

model.saveProduct = function (ideaDataProduct) {
    let refinedIdeaDataProduct = refineData(ideaDataProduct);
    let newIdeaProduct = {
        id: ideaDataProduct.id,
        name: refinedIdeaDataProduct.name,
        price: refinedIdeaDataProduct.price
    };
    model.ideas.push(newIdea);
}

