function smoothScroll(to, duration, element = window) {
	var start = element.scrollTop || element.pageYOffset || 0,
		change = ("#" == to.toString().charAt(0) ? document.getElementById(to.substring(1)).offsetTop : to) - start,
		time = 0,
		increment = 20;
	!function animate() {
		var r, val = start + change * (r = time += increment, (r /= duration) * r * r);
		element.scrollTo({ top: val }), time < duration && (window.requestAnimationFrame(animate) || window.webkitRequestAnimationFrame(animate) || window.mozRequestAnimationFrame(animate) || window.setTimeout(animate, 1e3 / 60))
	}()
}
