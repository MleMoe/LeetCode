// for (let i = 100; i < 200; i++) {
// 	if (i % 5 === 4 && i % 4 === 3 && i % 3 === 2) {
// 		console.log(i, i % 12)
// 	}
// }

// console.log(1 / 110 + 1 / 132 + 1 / 156 + 1 / 182 + 1 / 210 + 1 / 240 + 1 / 272)

// console.log(19 / 179)
// console.log(7 / 170)

// console.log(11 / 179)

// console.log(9 / 170)

for (let i = 100000; i < 1000000; i++) {
	if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
		if ((i / 3 + i / 5 + i / 7 + i / 9) / 4 === 23436) {
			console.log(i)
		}
	}
}
