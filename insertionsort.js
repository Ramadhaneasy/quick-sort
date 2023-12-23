function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Memindahkan elemen-elemen yang lebih besar dari currentElement ke posisi berikutnya
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Menempatkan currentElement pada posisi yang sesuai
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Contoh penggunaan
const arrayToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = insertionSort(arrayToSort);

console.log("Array sebelum diurutkan:", arrayToSort);
console.log("Array setelah diurutkan:", sortedArray);
