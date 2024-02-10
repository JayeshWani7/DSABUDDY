export async function* BinarySearch(array, element, highlight, marksort) {
    var ele = element();
    var msg = "Found element at index : "
    let second_index;
    let sorted = true;
    var found = false

    let low = 0
    let high = array.length

    for (let first_index = 0; first_index < array.length; first_index++) {
        second_index = first_index + 1;
        if (array[second_index] - array[first_index] < 0) {
            sorted = false
        }
    }

    if (sorted == true) {

        while (low <= high) {
            let midF = low + (high - low) / 2;

            let mid = parseInt(midF)


            yield await highlight([mid]);

            if (array[mid] == ele) {
                msg = msg + mid + "  "
                found = true
                marksort(mid);
            }

            if (array[mid] < ele)
                low = mid + 1;

            else
                high = mid - 1;
        }


        if (found) {
            alert(msg)
        }
        else {
            alert("Element did not found!")
        }
    }
    else {
        alert("Enter sorted array")
        yield
    }






    yield;

}
