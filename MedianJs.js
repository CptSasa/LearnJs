/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArr = merge(nums1,nums2)
    if(sortedArr.length % 2 != 0){
        return sortedArr[Math.floor(sortedArr.length/2)]
    }
    else{
        return (sortedArr[sortedArr.length/2] + sortedArr[sortedArr.length/2 -1])/2
    }
};


function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}