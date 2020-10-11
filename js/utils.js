function isPassed(validateResult) {
    let isFail = validateResult.includes(false);

    if(isFail == true) {
        return false;
    }

    return true;
    // return !isFail;
}

// kiểm tra format của email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//làm mịn data
function refineData(rawData) {
    let data = rawData.data()
    data.id = rawData.id
    return data
}