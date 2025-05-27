var isValid = function(word) {

    return (word.length >= 3) && (/^[a-zA-Z0-9]+$/.test(word))
 && /[aeiouAEIOU]/.test(word) && /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)
     
};