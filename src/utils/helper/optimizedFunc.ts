export const findSumCombinations = (arr: number[], target: number) => {
  const result: number[][] = []

  if (target === 0 || isNaN(target)) {
    return result
  }

  function findCombination (currArr: any, currSum: number, startIndex: number) {
    if (currSum === target) {
      result.push(currArr)
      return
    } else if (currSum >= target) {
      return
    }

    if (result.length < 3) {
      for (let i = startIndex; i < arr.length; i++) {
        findCombination(currArr.concat(arr[i]), currSum + arr[i], i)
      }
    }
  }

  findCombination([], 0, 0)
  return result
}
