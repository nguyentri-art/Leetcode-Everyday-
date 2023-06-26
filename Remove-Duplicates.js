

function removeDuplicated(nums) {

    //
    if (nums.length == 0) return 0;
    let k = 0;
    for (let value of nums) {
        console.log(k + "this k ")
        if (value != nums[k]) {
            nums[++k] = value;
        }
        console.log(k + "after if")
    }
    return k + 1;
}
 

myX = [0,1,1,1,1,1,2,2,2]

console.log(removeDuplicated(myX) + " this is function");

//3 - 1