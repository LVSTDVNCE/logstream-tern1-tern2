function manyChecks() {
	let a = Math.floor(Math.random() * 20) + 1
	console.log(`a = ${a}`)
	let check = ''

	if (a > 10) {
		if (a === 15) {
			check = 'a is bigger than 10 but a is not 15 and a is greater than 5'
		} else {
			check = 'a is bigger than 10 and a is greater than 5'
		}
	} else if (a > 5) {
		check = 'a is less than or equal to 10 and a is greater than 5'
	} else if (a < 5) {
		check = 'a is less than or equal to 10 and a is less than or equal to 5'
	} else {
		check =
			'a is less than or equal to 10 an example of a special case and a is less than or equal to 5'
	}

	switch (a % 2) {
		case 0:
			check += ' and a is even'
			break
		case 1:
			check += ' and a is odd'
			break
	}

	console.log(check)

	// return console.log(
	// 	(a > 10
	// 		? 'a is bigger than 10'
	// 		: 'a is less than or equal to 10 ' +
	// 		  (a === 5 ? 'an example of a special case' : '')) +
	// 		(a === 15 ? 'but a is not 15' : '') +
	// 		(a > 5
	// 			? 'and a is greater than 5'
	// 			: 'and a is less than or equal to 5 ') +
	// 		(a % 2 ? ' and a is odd' : ' and a is even ')
	// )
}

manyChecks()

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()
