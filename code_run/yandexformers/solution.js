
// Самое очевидное, но то, которое провалится по времени из-за процесса сортировки
function solution1(N, staff, K) {
    let totalgrade = 0

    staff.sort((a, b) => (b - a))

    while (--K >= 0) {
        totalgrade += staff[K]
    }

    return totalgrade
}

// Оптимальное решение, которое выполняет все условия.
// Используемые алгоритм - сортировка подсчетом
function solution2(N, staff, K) {
    let gradesArr = new Array(25).fill(0)
    let totalgrade = 0
    let ct = gradesArr.length - 1
    let availableKeyboardsTemp

    staff.forEach((grade) => {
        ++gradesArr[grade]
    })

    while (ct >= 0 && K >= 0) {
        if (gradesArr[ct]) {
            availableKeyboardsTemp = Math.min(gradesArr[ct], K)

            totalgrade += ct * availableKeyboardsTemp

            K -= availableKeyboardsTemp
        }

        --ct
    }

    return totalgrade
}
