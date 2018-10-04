function smoothScroll(to, duration) {
  var body = document.body,
	  start = body.scrollTop,
	  change = ("#" == to.toString().charAt(0) ? document.getElementById(to.substring(1)).offsetTop : to) - start,
	  time = 0,
	  increment = 20;
  ! function animate() {
	var r, val = start + change * (r = time += increment, (r /= duration) * r * r);
	body.scrollTop = val, time < duration && (window.requestAnimationFrame(animate) || window.webkitRequestAnimationFrame(animate) || window.mozRequestAnimationFrame(animate) || window.setTimeout(animate, 1e3 / 60))
  }()
}
