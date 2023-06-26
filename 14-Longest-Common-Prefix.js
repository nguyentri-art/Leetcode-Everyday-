
var longgerstCommon = function(strs){
    
    var result = "";

    if(strs === null || strs.length === 0) {
        return result;
    }

    for (let i = 0; i < strs[0].length; i++){
        const char = strs[0][i]

        for ( let j = 1 ; j < strs.length; j++){
            if(strs[j][i] !== char) 
            return result
            console.log(strs[j][i] + " đây r ");
        }

        result = result + char;
    }
    return result;

}

teststrs = ["flower","flow","flight"];
console.log(longgerstCommon(teststrs));


