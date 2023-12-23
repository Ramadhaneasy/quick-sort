function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Membagi array menjadi dua bagian
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Menggabungkan dua bagian yang sudah diurutkan
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Membandingkan elemen-elemen dari dua array dan menggabungkannya secara urut
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Menambahkan sisa elemen-elemen yang mungkin tersisa di kedua array
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Contoh penggunaan
const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = mergeSort(arrayToSort);

console.log("Array sebelum diurutkan:", arrayToSort);
console.log("Array setelah diurutkan:", sortedArray);
