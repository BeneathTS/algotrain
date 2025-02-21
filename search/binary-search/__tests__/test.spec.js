import { binarySearch } from "../binary-search"

const numbersTestsData = [
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 6,    answer: 5     },
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 1,    answer: 0     },
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 5,    answer: 4     },
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 10,   answer: 9     },
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 9,    answer: 8     },
    { dataArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],   search: 13,   answer: null  }
]

const lettersTestsData = [
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "yaz", answer: 7     },
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "ab",  answer: 0     },
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "hj",  answer: 4     },
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "zxx", answer: 9     },
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "zxc", answer: 8     },
    { dataArray: ["ab", "ac", "ad", "de", "hj", "hy", "jkz", "yaz", "zxc", "zxx"],   search: "fff", answer: null  }
]

describe('Алгоритм бинарного поиска', () => {
    test.each(numbersTestsData)('При поиске числа $search должен вернуть индекс $answer', ({ dataArray, search, answer }) => {
        expect(binarySearch(dataArray, search)).toBe(answer)
    })

    test.each(lettersTestsData)('При поиске строки $search должен вернуть индекс $answer', ({ dataArray, search, answer }) => {
        expect(binarySearch(dataArray, search)).toBe(answer)
    })
})
