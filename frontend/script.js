// Get all nav items
const navItems = document.querySelectorAll(".nav-item")

// Get all content sections
const contentSections = document.querySelectorAll(".content-section")

// Add click event listeners to nav items
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all items
    navItems.forEach((i) => i.classList.remove("active"))

    // Add active class to clicked item
    item.classList.add("active")

    // Hide all content sections
    contentSections.forEach((section) => {
      section.style.display = "none"
      section.classList.remove("active")
    })

    // Show the corresponding content section
    const sectionId = item.getAttribute("data-section")
    const activeSection = document.getElementById(sectionId)
    activeSection.style.display = "block"

    // Use setTimeout to trigger the fade-in effect
    setTimeout(() => {
      activeSection.classList.add("active")
    }, 50)
  })
})

// Set the initial active section (About)
document.getElementById("about").style.display = "block"
document.getElementById("about").classList.add("active")

const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://hylh332osxbvauini3qwe6ejzq0wymoc.lambda-url.us-east-1.on.aws/");
    let data = await response.json(); // Await the JSON parsing
    counter.innerHTML = `Total number of views: ${data}`;
  } catch (error) {
    console.error("Error fetching data:", error);
    counter.innerHTML = "Failed to load view count.";
  }
}

updateCounter();