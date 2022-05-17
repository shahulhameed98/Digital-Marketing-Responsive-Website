//execute script after page load
window.onload = function digital_fn() {
	//toggle button
	let toggle = document.querySelector("#nav .toggle-btn");
	let collapse = document.querySelector("#nav .collapse");
	let collapseLink = document.querySelectorAll("#nav .collapse ul li a");
	console.log(collapseLink);

	toggle.addEventListener("click", function (event) {
		collapse.classList.toggle("active");
		collapseLink.forEach((Link) => {
			Link.addEventListener("click", () => {
				if (collapse.classList.contains("active")) {
					collapse.classList.remove("active");
				}
			});
		});
	});

	//masonry js
	let grid = document.querySelector(
		"#site-main .recent-work-area .images-flex"
	);

	let masonry = new Masonry(grid, {
		itemSelector: ".flex-item",
		gutter: 100,
		fitwidth: true,
	});
};

//rellax js
var rellax = new Rellax(".rellax", {
	center: true,
});
