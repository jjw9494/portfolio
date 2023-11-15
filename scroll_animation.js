gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on About section
mm.add("(min-width: 35em)", () => {
	gsap.set(".about", { opacity: "0%", lineHeight: 4 });

	gsap.to(".about", {
		opacity: "100%",
		lineHeight: 1.5,
		scrollTrigger: {
			markers: false,
			start: "top top",
			end: "+=1100",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});
});

// Scroll effect on Portfolio section
mm.add("(min-width: 35em)", () => {
	gsap.set(".portfolio :nth-child(1)", {
		opacity: "0%",
		lineHeight: 7,
		positionY: -20,
	});

	gsap.to(".portfolio :nth-child(1)", {
		positionY: 0,
		opacity: "100%",
		lineHeight: 1.5,
		scrollTrigger: {
			markers: false,
			start: "top",
			end: "+=1500",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});
});
