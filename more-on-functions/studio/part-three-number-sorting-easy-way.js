//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function findMaxValue(arr){
    let maxValue = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] > maxValue){
        maxValue = arr[i];
      }
    }
    return maxValue;
  }

function arraySortMax(arr) {
    newArr = []
    
    while(arr.length > 0) {
    maxVal = findMaxValue(arr)
    newArr.push(maxVal)
    arr.splice(arr.indexOf(maxVal), 1)
    }
   return newArr
  }

  console.log(arraySortMax(nums1, nums2, nums3))
//Sort each array in decending order.

function arraySortMin(arr) {
    newArr = []
    
    while(arr.length > 0) {
    minVal = findMinValue(arr)
    newArr.push(minVal)
    arr.splice(arr.indexOf(minVal), 1)
    }
   return newArr
  }

  function findMinValue(arr){
    let minValue = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < minValue){
        minValue = arr[i];
      }
    }
    return minValue;
  }

  console.log(arraySortMax(nums1, nums2, nums3))

  