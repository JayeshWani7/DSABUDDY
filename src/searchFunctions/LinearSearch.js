export async function* LinearSearch(array, element, highlight, marksort) {
  if (!array || array.length === 0) {
    alert("Array not provided or empty");
    return;
  }
  if (!element()) {
    alert("Searching Element not provided.");
    return;
}
  var ele= element();
  var msg = "Found element at index : "
  var found = false
  
  for (let i = 0; i < array.length; i++) {
      yield await highlight([i]);
      
      if (array[i] == ele) {
        msg = msg + i + "  "
        found = true
        marksort(i);
      }
    }

    if(found){
    alert(msg)
    }
    else{
      alert("Element did not found!")
    }

    yield;
  
}
