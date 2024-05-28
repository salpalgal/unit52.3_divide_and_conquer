function sortedFrequency(arr,val) {
let firstIdx = findFirst(arr,val)
let lastIdx = findLast(arr,val)
if (firstIdx === -1) return firstIdx

return lastIdx-firstIdx +1
}
function findFirst(arr,val,low=0,high=arr.length-1){
    if(high>=low){
        let mid = low +Math.floor((high-low)/2)
        if((mid===0||val >arr[mid-1]) && arr[mid]===val){
            return mid
        }
        if(arr[mid]<val){
            return findFirst(arr,val,mid+1,high)
        }else{
            return findFirst(arr,val,low,mid-1)
        }
    }
    return -1
}
function findLast(arr,val,low=0,high=arr.length-1){
    if(high>=low){
        let mid = low +Math.floor((high-low)/2)
        if((mid===arr.length-1||val<arr[mid+1]) && arr[mid]===val){
            return mid
        }
        if(arr[mid]>val){
            return findLast(arr,val,low,mid-1)
            
        }else{
            return findLast(arr,val,mid+1,high)
        }
    }
    return -1
}
module.exports = sortedFrequency