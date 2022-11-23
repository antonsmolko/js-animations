import { animation, transition } from "./transition.js";

const $showBtn = document.querySelector('#showBtn')
const $hideBtn = document.querySelector('#hideBtn')
const $alert = document.querySelector('.alert')

// const onAlertShow = () => transition({ element: $alert, mode: 'in' })
// const onAlertHide = () => transition({ element: $alert, mode: 'out' })

const onAlertShow = () => animation({ element: $alert, mode: 'in', name: 'slide-left' })
const onAlertHide = () => animation({ element: $alert, mode: 'out', name: 'slide-left' })

$showBtn.addEventListener('click', onAlertShow)
$hideBtn.addEventListener('click', onAlertHide)

// const onAlertShow = () => {
// 	const handler = () => {
// 		$alert.classList.remove('fade--enter-active')
// 		$alert.removeEventListener('transitionend', handler)
// 	}
//
// 	$alert.style.display = 'block'
// 	$alert.classList.add('fade--enter')
//
// 	nextFrame(() => {
// 		$alert.classList.add('fade--enter-active')
// 		$alert.classList.remove('fade--enter')
// 	})
//
// 	$alert.addEventListener('transitionend', handler)
// }
//
// const onAlertHide = () => {
// 	const handler = () => {
// 		$alert.style.display = null
// 		$alert.classList.remove('fade--leave')
// 		$alert.classList.remove('fade--leave-active')
//
// 		$alert.removeEventListener('transitionend', handler)
// 	}
//
// 	$alert.classList.add('fade--leave')
//
// 	nextFrame(() => {
// 		$alert.classList.add('fade--leave-active')
// 		$alert.classList.remove('fade--leave')
// 	})
//
// 	$alert.addEventListener('transitionend', handler)
// }


/**
 * LIST
 */

window.onload = () => {
	const $list = document.querySelector('#targetList')
	const $addItem = document.querySelector('#addItem')

	const addItem = () => {
		const $li = document.createElement('li')
		$li.classList.add('list-group-item')
		$li.innerText = String(Math.random())

		$list.append($li)
		animation({ element: $li, name: 'slide-left' })
	}

	const removeItem = (e) => {
		const element = e.target
		if (element.parentNode !== $list) {
			return
		}

		animation({ element, name: 'slide-left', mode: 'out' }, (element) => {
			$list.removeChild(element)
		})
	}

	$list.addEventListener('click', removeItem)
	$addItem.addEventListener('click', addItem)
}
