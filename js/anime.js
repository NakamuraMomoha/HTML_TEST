
var tl = new TimelineMax({
	repeat:-1,
	yoyo:true
});

tl.to("#distortion", 1, {attr:{scale:60}, ease:Power2.easeOut})
.to("#distortion", 1, {attr:{scale:40}, ease:Power2.easeOut});