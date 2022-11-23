import { nextFrame } from "./utils.js";

const suffixMap = {
	in: 'enter',
	out: 'leave'
}

export const transition = ({
	element,
	name = 'fade',
	mode = 'in',
	listener = 'transitionend'
}, callback) => {
	const suffix = suffixMap[mode]

	const handler = () => {
		if (mode === 'out') {
			element.style.display = null
		}

		element.classList.remove(`${name}--${suffix}`)
		element.classList.remove(`${name}--${suffix}-active`)

		element.removeEventListener(listener, handler)

		callback && callback(element)
	}

	if (mode === 'in') {
		element.style.display = 'block'
	}

	element.classList.add(`${name}--${suffix}`)

	nextFrame(() => {
		element.classList.add(`${name}--${suffix}-active`)
		element.classList.remove(`${name}--${suffix}`)
	})

	element.addEventListener(listener, handler)
}

export const animation = (payload, callback) => transition({ ...payload, listener: 'animationend' }, callback)


