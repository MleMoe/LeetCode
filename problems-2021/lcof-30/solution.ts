class MinStack {
  stackRaw: number[]
  stackMin: number[]
  constructor() {
    this.stackRaw = []
    this.stackMin = []
  }

  push(x: number): void {
    this.stackRaw.push(x)
    // 非严格降序，只需要在当前时刻，是 min 值的元素存储了就行，不可能是 min 值的不需要存储
    if (!this.stackMin.length || this.stackMin.slice(-1)[0] >= x) {
      this.stackMin.push(x)
    }
  }

  pop(): void {
    const el = this.stackRaw.pop()
    if (el === this.min()) {
      this.stackMin.pop()
    }
  }

  top(): number {
    return this.stackRaw.slice(-1)[0]
  }

  min(): number {
    return this.stackMin.slice(-1)[0]
  }
}
