export const binarySearch = (array, searchValue) => {
    let first = 0
    let last = array.length - 1
    let curr

    while (first <= last) {
        curr = Math.floor((last + first) / 2)

        if (array[curr] === searchValue) {
            return curr
        }

        if (array[curr] < searchValue) {
            first = curr + 1
        } else {
            last = curr - 1
        }
    }

    return null
}
