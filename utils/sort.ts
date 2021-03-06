/**
 * 快速排序
 * @param nums
 * @param l
 * @param h
 * @returns
 */
function partion(nums: number[], l: number, h: number): number {
  const pivot = nums[l]
  while (l < h) {
    while (l < h && nums[h] >= pivot) {
      h--
    }
    nums[l] = nums[h]
    while (l < h && nums[l] <= pivot) {
      l++
    }
    nums[h] = nums[l]
  }
  nums[l] = pivot
  return l
}

export function quickSort(nums: number[], l: number, h: number) {
  if (l < h) {
    const pivotIndex = partion(nums, l, h)
    quickSort(nums, l, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, h)
  }
}

const paraNums = [2, 3, 1, 0, 4, 8, 9, 6]
quickSort(paraNums, 0, paraNums.length - 1)

// console.log(paraNums)

/**
 * 归并排序
 * @param lefts
 * @param rights
 * @returns
 */
function merge(lefts: number[], rights: number[]) {
  const res = []
  while (lefts.length && rights.length) {
    if (lefts[0] <= rights[0]) {
      res.push(lefts.shift())
    } else {
      res.push(rights.shift())
    }
  }
  return res.concat(lefts.length ? lefts : rights)
}

export function mergeSort(nums: number[]) {
  if (nums.length <= 1) {
    return nums
  }
  const mid = Math.floor(nums.length / 2)
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)))
}

console.log(mergeSort(paraNums))

export function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        nums[i], (nums[j] = nums[j]), nums[i]
      }
    }
  }
  return nums
}

console.log(bubbleSort(paraNums))
