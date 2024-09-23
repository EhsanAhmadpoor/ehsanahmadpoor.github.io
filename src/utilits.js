export const activeSection = () => {
  // Add the scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Select all sections that need to be tracked for active state
    const sections = document.querySelectorAll(".pp-section");
    const navLi = document.querySelectorAll(".nav-menu li");
    let current = "";

    // Determine which section is currently in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    // Remove the active class from all nav items and add to the matching one
    navLi.forEach((li) => {
      li.classList.remove("active");
      // Check if the `to` attribute of the ScrollLink matches the current section ID
      const scrollLink = li.querySelector(".nav-link");
      if (scrollLink && scrollLink.getAttribute("to") === current) {
        li.classList.add("active");
      }
    });
  });
};
