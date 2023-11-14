gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let mm = gsap.matchMedia();

// Scroll effect on About section
mm.add("(min-width: 35em)", () => {
	gsap.set(".about", { opacity: "10%", lineHeight: 3 });

	gsap.to(".about", {
		opacity: "100%",
		lineHeight: 1.5,
		scrollTrigger: {
			markers: false,
			start: "top top",
			end: "+=900",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});
});

// Scroll effect on Portfolio section
mm.add("(min-width: 35em)", () => {
	gsap.set(".portfolio :nth-child(1)", { opacity: "0%", lineHeight: 5 });

	gsap.to(".portfolio :nth-child(1)", {
		opacity: "100%",
		lineHeight: 1.5,
		scrollTrigger: {
			markers: false,
			start: "top",
			end: "+=1200",
			scrub: 1,
			pin: true,
			pinSpacing: true,
			anticipatePin: 1,
		},
	});
});
