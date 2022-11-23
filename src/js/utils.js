const raf = window.requestAnimationFrame

export const nextFrame = (fn) => {
	raf(() => {
		raf(fn)
	})
}
