function frankenSplice(arr1, arr2, index) {
  let localArray = arr2.slice();
  
  // 2. Insert elements of the first array into the copy at index
  // Use 0 for the second argument so no elements are deleted
  localArray.splice(index, 0, ...arr1);
  
  // 3. Return the new modified copy
  return localArray;
}
