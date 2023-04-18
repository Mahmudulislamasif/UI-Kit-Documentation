const toggleMenu = document.querySelector('.toggle-menu');
		const sidebarContent = document.querySelector('.sidebar-content');
		var links = document.querySelectorAll("nav a");
		toggleMenu.addEventListener('click', () => {
			toggleMenu.classList.toggle('active-link');
			sidebarContent.classList.toggle('active-link');
		});
		links.forEach(function(link) {
		link.addEventListener("click", function() {
			links.forEach(function(link) {
			link.classList.remove("active");
			});
			this.classList.add("active");
		});
		});
// 		window.addEventListener("scroll", function() {
//   // Get the current vertical scroll position
//   var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

//   // Loop through all the links and check if their corresponding section is visible
//   for (var i = 0; i < links.length; i++) {
//     var currLink = links[i];
//     var refElement = document.querySelector(currLink.getAttribute("href"));
//     if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.offsetHeight > scrollPos) {
//       // If the section is visible, remove the 'active' class from all links and add it to the current one
//       for (var j = 0; j < links.length; j++) {
//         links[j].classList.remove("active");
//       }
//       currLink.classList.add("active");
//     } else {
//       // If the section is not visible, remove the 'active' class from the current link
//       currLink.classList.remove("active");
//     }
//   }
// });