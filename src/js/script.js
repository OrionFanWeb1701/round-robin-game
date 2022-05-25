const btns = document.querySelectorAll('.btn')
const scoreText = document.querySelector('.score-box__text')
const repeatBtn = document.querySelector('.repeat-btn')

let numberId = 0
let arrayArea = []
let arrayAreaX = []
let arrayAreaO = []

scoreText.textContent = ''

btns.forEach(btn => {
	btn.addEventListener('click', () => {
		numberId++
		btn.setAttribute('id', numberId)
		btn.disabled = true

		const handleNumber = parseInt(btn.getAttribute('id'))
		const handleArea = btn.dataset.area

		arrayArea.push(handleArea)

		if (handleNumber % 2 === 0) {
			btn.classList.add('active')
			btn.innerHTML = '0'
			arrayAreaO.push(handleArea)
		} else {
			btn.classList.add('active2')
			btn.innerHTML = 'X'
			arrayAreaX.push(handleArea)
		}

		if (
			(arrayAreaX.includes('A1') && arrayAreaX.includes('A2') && arrayAreaX.includes('A3')) ||
			(arrayAreaX.includes('B1') && arrayAreaX.includes('B2') && arrayAreaX.includes('B3')) ||
			(arrayAreaX.includes('C1') && arrayAreaX.includes('C2') && arrayAreaX.includes('C3')) ||
			(arrayAreaX.includes('A1') && arrayAreaX.includes('B1') && arrayAreaX.includes('C1')) ||
			(arrayAreaX.includes('A2') && arrayAreaX.includes('B2') && arrayAreaX.includes('C2')) ||
			(arrayAreaX.includes('A3') && arrayAreaX.includes('B3') && arrayAreaX.includes('C3')) ||
			(arrayAreaX.includes('A1') && arrayAreaX.includes('B2') && arrayAreaX.includes('C3')) ||
			(arrayAreaX.includes('A3') && arrayAreaX.includes('B2') && arrayAreaX.includes('C1'))
		) {
			scoreText.style.display = 'inline-block'
			scoreText.textContent = 'wygrał krzyżyk!'
			btns.forEach(btn => {
				btn.disabled = true
				btn.style.boxShadow = 'none'
			})
		} else if (
			(arrayAreaO.includes('A1') && arrayAreaO.includes('A2') && arrayAreaO.includes('A3')) ||
			(arrayAreaO.includes('B1') && arrayAreaO.includes('B2') && arrayAreaO.includes('B3')) ||
			(arrayAreaO.includes('C1') && arrayAreaO.includes('C2') && arrayAreaO.includes('C3')) ||
			(arrayAreaO.includes('A1') && arrayAreaO.includes('B1') && arrayAreaO.includes('C1')) ||
			(arrayAreaO.includes('A2') && arrayAreaO.includes('B2') && arrayAreaO.includes('C2')) ||
			(arrayAreaO.includes('A3') && arrayAreaO.includes('B3') && arrayAreaO.includes('C3')) ||
			(arrayAreaO.includes('A1') && arrayAreaO.includes('B2') && arrayAreaO.includes('C3')) ||
			(arrayAreaO.includes('A3') && arrayAreaO.includes('B2') && arrayAreaO.includes('C1'))
		) {
			scoreText.style.display = 'inline-block'
			scoreText.textContent = 'wygrało kółko!'
			btns.forEach(btn => {
				btn.disabled = true
				btn.style.boxShadow = 'none'
			})
		} else if (
			arrayArea.includes('A1') &&
			arrayArea.includes('A2') &&
			arrayArea.includes('A3') &&
			arrayArea.includes('B1') &&
			arrayArea.includes('B2') &&
			arrayArea.includes('B3') &&
			arrayArea.includes('C1') &&
			arrayArea.includes('C2') &&
			arrayArea.includes('C3')
		) {
			scoreText.style.display = 'inline-block'
			scoreText.textContent = 'remis!'
		}
	})
})

repeatBtn.addEventListener('click', () => {
	window.location.reload(true)
})
