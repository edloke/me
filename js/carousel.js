document.addEventListener("DOMContentLoaded", () => {
	const track = document.querySelector(".carousel-track");
	const cards = document.querySelectorAll(".deconstructed-card");
	const prevBtn = document.querySelector(".carousel-button.prev");
	const nextBtn = document.querySelector(".carousel-button.next");
	const dotsContainer = document.querySelector(".dots-container");

	cards.forEach((_, index) => {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("active");
		dot.addEventListener("click", () => goToCard(index));
		dotsContainer.appendChild(dot);
	});

	const dots = document.querySelectorAll(".dot");

	var cardWidth = cards[0].offsetWidth;
	var cardMargin = 64;
  var totalCardWidth = cardWidth + cardMargin;

  //To allow real-time update of carousel when resizing window
  $(window).resize(function() {
    cardWidth = cards[0].offsetWidth;
    totalCardWidth = cardWidth + cardMargin;
    console.log("test")
  });
	

	let currentIndex = 0;

	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const rect = card.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			const xDeg = (y - 0.5) * 8;
			const yDeg = (x - 0.5) * -8;
			// card.style.transform = `perspective(1200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
			// const layers = card.querySelectorAll(".card-layer");
			// layers.forEach((layer, index) => {
			// 	const depth = 30 * (index + 1);
			// 	const translateZ = depth;
			// 	const offsetX = (x - 0.5) * 10 * (index + 1);
			// 	const offsetY = (y - 0.5) * 10 * (index + 1);
			// 	layer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, ${translateZ}px)`;
			// });
			const waveSvg = card.querySelector(".wave-svg");
			if (waveSvg) {
				const moveX = (x - 0.5) * -32;
				const moveY = (y - 0.5) * -32;
				waveSvg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
				const wavePaths = waveSvg.querySelectorAll("path:not(:first-child)");
				wavePaths.forEach((path, index) => {
					const factor = 1 + index * 0.5;
					const waveX = moveX * factor * 0.5;
					const waveY = moveY * factor * 0.3;
					path.style.transform = `translate(${waveX}px, ${waveY}px)`;
				});
			}
			const bgObjects = card.querySelectorAll(".bg-object");
			bgObjects.forEach((obj, index) => {
				const factorX = (index + 1) * 10;
				const factorY = (index + 1) * 8;
				const moveX = (x - 0.5) * factorX;
				const moveY = (y - 0.5) * factorY;
				if (obj.classList.contains("square")) {
					obj.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
				} else if (obj.classList.contains("triangle")) {
					obj.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1)`;
				} else {
					obj.style.transform = `translate(${moveX}px, ${moveY}px)`;
				}
			});
		});

		card.addEventListener("mouseleave", () => {
			card.style.transform = "";
			const layers = card.querySelectorAll(".card-layer");
			layers.forEach((layer) => {
				layer.style.transform = "";
			});
			const waveSvg = card.querySelector(".wave-svg");
			if (waveSvg) {
				waveSvg.style.transform = "";
				const wavePaths = waveSvg.querySelectorAll("path:not(:first-child)");
				wavePaths.forEach((path) => {
					path.style.transform = "";
				});
			}
			const bgObjects = card.querySelectorAll(".bg-object");
			bgObjects.forEach((obj) => {
				if (obj.classList.contains("square")) {
					obj.style.transform = "rotate(45deg) translateY(-20px)";
				} else if (obj.classList.contains("triangle")) {
					obj.style.transform = "translate(-50%, -50%) scale(0.5)";
				} else {
					obj.style.transform = "translateY(32px)";
				}
			});
		});
	});

  function updateCarousel() {
		const translateX = -currentIndex * totalCardWidth;

		track.style.transform = `translateX(${translateX}px)`;

		dots.forEach((dot, index) => {
			dot.classList.toggle("active", index === currentIndex);
		});
	}

	function goToCard(index) {
		index = Math.max(0, Math.min(index, cards.length - 1));

		currentIndex = index;
		updateCarousel();
	}

	prevBtn.addEventListener("click", () => {
		goToCard(currentIndex - 1);
	});

	nextBtn.addEventListener("click", () => {
		goToCard(currentIndex + 1);
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			goToCard(currentIndex - 1);
		} else if (e.key === "ArrowRight") {
			goToCard(currentIndex + 1);
		}
	});

	// let touchStartX = null;
	// let touchEndX = null;

  // function handleSwipe() {
	// 	if (touchStartX - touchEndX > 32) {
	// 		goToCard(currentIndex + 1);
	// 	} else if (touchEndX - touchStartX > 32) {
	// 		goToCard(currentIndex - 1);
	// 	}
	// }

	// track.addEventListener("touchstart", (e) => {
	// 	touchStartX = e.touches[0].clientX;
	// });

	// track.addEventListener("touchend", (e) => {
	// 	touchEndX = e.changedTouches[0].clientX;
	// 	handleSwipe();
  //   touchStartX = null;
	// });


	window.addEventListener("resize", () => {
		const newCardWidth = cards[0].offsetWidth;
		const newTotalCardWidth = newCardWidth + cardMargin;

		const translateX = -currentIndex * newTotalCardWidth;
		track.style.transition = "none";
		track.style.transform = `translateX(${translateX}px)`;

		setTimeout(() => {
			track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
		}, 50);
	});

	updateCarousel();
});

