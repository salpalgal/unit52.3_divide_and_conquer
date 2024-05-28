function findFloor(arr,val,low=0,high=arr.length-1) {
  if(high<low) return -1;
  let mid = Math.floor((low + high) / 2)
  if (val >= arr[high]) return arr[high];
  if (val === arr[mid]) return arr[mid];
  if(val<arr[mid] && mid>0 && arr[mid-1]<=val)return arr[mid-1];
  if(val < arr[mid]) return findFloor(arr,val,low,mid-1)
    return findFloor(arr,val,mid+1,high)
}


module.exports = findFloor