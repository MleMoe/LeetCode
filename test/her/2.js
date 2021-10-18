const K = 3
function partion(nums, l, h) {
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

function quickSort(nums, l, h) {
  if (l < h) {
    const pivotIndex = partion(nums, l, h)
    if (K === pivotIndex) {
      return
    }
    quickSort(nums, l, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, h)
  }
}

function fun(N, K, prices) {
  quickSort(prices, 0, prices.length - 1)
  return prices[K - 1]
}

const prices = [2, 3, 1, 0, 4, 8, 9, 6]
// console.log(fun(6, 3, prices))
console.log(prices)

console.log(prices.sort()[K - 1])
