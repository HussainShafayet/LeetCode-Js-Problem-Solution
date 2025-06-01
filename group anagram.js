var groupAnagrams = function(strs) {
    const ret = {};
    for(let str of strs){
        const sortedStr = str.split('').sort().join('');
        if(!ret[sortedStr]){
            ret[sortedStr] = [];
        }
        ret[sortedStr].push(str);
    }
    return Object.values(ret);
};