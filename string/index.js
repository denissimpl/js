function ucFirst (str) {
    return str.charAt(0).toUpperCase()
    + str.slice(1)
}
alert(ucFirst("вася") == "Вася")

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert(checkSpam('buy ViAgRA now') == true)
alert(checkSpam('free xxxxx') == true)
alert(checkSpam("innocent rabbit") == false)

function truncate(str, maxlength) {
    if (maxlength < str.length){
        return str.slice(0,maxlength-str.length-1)+"..."
    }
    return str
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

alert(truncate("Всем привет!", 20))

function extractCurrencyValue(str) {
    let first = null;
    for (let i = 0; i < str.length; i++){
        if (+str[i]){
            first = i;
        } 
    }
    alert(str.slice(first))
}
extractCurrencyValue("$100")