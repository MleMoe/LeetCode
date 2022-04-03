# LeetCode

[![LeetCode TOC](https://github.com/MleMoe/LeetCode/workflows/LeetCode%20TOC/badge.svg)](https://github.com/MleMoe/LeetCode/actions?query=workflow%3A%22LeetCode+TOC%22)

[LeetCode](https://leetcode-cn.com) Practice [TOC 目录](https://mlemoe.github.io/LeetCode/)

## Language

<!-- <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> -->

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>

- TypeScript
- Python3

## Usage

### Generate TOC

```sh
yarn generate:TOC
```

### Lint

[ESLint](https://eslint.org/)

- husky
- lint-staged

```sh
yarn lint
```

## Cli

### Link Cli

### 开始解题

```sh
yarn start
```

跟随提示，输入题目 ID，标题，索引，难易度，将会自动建立对应文件夹并记录信息至 `package.json`。

结果检验注意事项，为满足多参数输入，传参用 `[ ]` 包裹。

```js
// function findNumberIn2DArray(matrix: number[][], target: number): boolean {}
const testcases = [
  [
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ],
  [
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ],
]
const expectedReults = [true, false]
```

### 解题完毕

```sh
yarn solve
```

输入对应题目 ID，将会通过自动提交带有题目信息的 `commit`。

如：`git commit -m "✅ solve palindrome-number"`
