var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const countS={};
    const countT={};
    for(let i = 0; i<s.length; i++){
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0 ) + 1;
    }
    for(let key in countS){
        if(countS[key] !== countT[key]){
            return false;
        }
    }
    return true;
};