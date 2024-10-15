let a = Math.floor(Math.random() * 100)
;(a > 10 ? a : a * 2) > 5
	? 2 * a + 1
	: (a < 3 ? 1 : 2 * (a - 2)) > 4
	? 5
	: a % 2 == 0
	? 6
	: 7
console.log(a)
console.log(
	(a > 10 ? a : a * 2) > 5
		? 2 * a + 1
		: (a < 3 ? 1 : 2 * (a - 2)) > 4
		? 5
		: a % 2 == 0
		? 6
		: 7
)
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()
/////////////////////////////////////////////////////////////////////////////

if (a > 10 || a * 2 > 5) {
	console.log(2 * a + 1)
} else if (a % 2 == 0) {
	console.log(6)
} else {
	console.log(7)
}

switch (a) {
	case 0:
	case 2:
		console.log(6)
		break
	case 1:
		console.log(7)
		break
	default:
		console.log(2 * a + 1)
}

/////////////////////////////////////////////////////////////////////////////
// if (a > 10) {
// 	if (a > 5) {
// 		console.log(2 * a + 1)
// 	} else {
// 		if (a < 3) {
// 			if (true) {
// 				if (a % 2 == 0) {
// 					console.log(6)
// 				} else {
// 					console.log(7)
// 				}
// 			}
// 		} else {
// 			if (2 * (a - 2) > 4) {
// 				console.log(5)
// 			} else {
// 				if (a % 2 == 0) {
// 					console.log(6)
// 				} else {
// 					console.log(7)
// 				}
// 			}
// 		}
// 	}
// } else {
// 	if (a * 2 > 5) {
// 		console.log(2 * a + 1)
// 	} else {
// 		if (a < 3) {
// 			if (true) {
// 				if (a % 2 == 0) {
// 					console.log(6)
// 				} else {
// 					console.log(7)
// 				}
// 			}
// 		} else {
// 			if (2 * (a - 2) > 4) {
// 				console.log(5)
// 			} else {
// 				if (a % 2 == 0) {
// 					console.log(6)
// 				} else {
// 					console.log(7)
// 				}
// 			}
// 		}
// 	}
// }

// if (a > 10) {
// 	console.log(2 * a + 1)
// } else {
// 	if (a * 2 > 5) {
// 		console.log(2 * a + 1)
// 	} else {
// 		if (a % 2 == 0) {
// 			console.log(6)
// 		} else {
// 			console.log(7)
// 		}
// 	}
// }

// if (a > 10) {
// 	console.log(2 * a + 1)
// } else if (a * 2 > 5) {
// 	console.log(2 * a + 1)
// } else if (a % 2 == 0) {
// 	console.log(6)
// } else {
// 	console.log(7)
// }
