function findRotatedIndex(arr,val) {

let mid = Math.floor((arr.length)/2)
let left = binarySearch(arr.slice(0,mid),val)
if(left>0){
    return left 
}else{
    let result = binarySearch(arr.slice(mid),val)
    if(result>0){
        return result +mid
    }else{
        return result
    }
   
}
}
function binarySearch(arr,val){
    let leftIdx=0;
    let rightIdx = arr.length-1
    while(leftIdx<=rightIdx){
        let midIdx = Math.floor((leftIdx+rightIdx)/2)
        let midVal = arr[midIdx]
        if(midVal<val){
            leftIdx= midIdx+1
        }
        else if(midVal>val){
            rightIdx=midIdx-1
        }else{
            return midIdx
        }
    }
    return -1

}

module.exports = findRotatedIndex