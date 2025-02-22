import { euqlide } from "../euqlide"

const numbersTestsData = [
    { dataArray: [ 26, 13 ],    answer: 13  },
    { dataArray: [ 38, 26 ],    answer: 2   },
    { dataArray: [ 80, 50 ],    answer: 10  },
    { dataArray: [ 145, 25 ],   answer: 5   },
    { dataArray: [ 80, 34 ],    answer: 2   },
    { dataArray: [ -12, -6 ],   answer: 6   },
    { dataArray: [ -49, 14 ],   answer: 7   }
]

describe('Алгоритм Евклида для поиска наибольшего общего делителя', () => {
    test.each(numbersTestsData)('У чисел $dataArray должен быть найден НОД - $answer', ({ dataArray, answer }) => {
        expect(euqlide(dataArray[0], dataArray[1])).toBe(answer)
    })
})
