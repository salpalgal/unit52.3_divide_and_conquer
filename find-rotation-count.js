function findRotationCount(arr, low = 0, high = arr.length - 1){
if(high<low)return 0;
if(high===low) return low;
let mid = Math.floor((high+low)/2);
if(arr[mid]>arr[mid+1] && mid<high) return mid +1;
if(arr[mid]<arr[mid-1] && mid > low) return mid ;
if(arr[high]> arr[mid]){
    return findRotationCount(arr,low,mid-1)
}
return findRotationCount(arr,mid+1,high)

    
}


module.exports = findRotationCount