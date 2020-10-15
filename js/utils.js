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

//Check số
function phonenumber(str)
{
    var isphone = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g.test(str);
    return isphone
}

//max kí tự ZIP
function LengthZip(characterlength)
{
    let str = characterlength
    if(str.length <=10)
    {
        return true
    }
    else
    {
        return false
    }
}
//max kí tự sđt
function LengthAll(characterlength)
{
    let str = characterlength
    if(str.length <=20)
    {
        return true
    }
    else
    {
        return false
    }
}
//check kí tự đặc biệt trong tên
function specialCharacters(input) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(input)){
     return false
    } else {
        return true
    }
  }