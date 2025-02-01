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

// GET API REQUEST
async function get_visitors() {
  // call post api request function
  //await post_visitor();
  try {
      let response = await fetch('https://mamg1590n0.execute-api.us-east-1.amazonaws.com/default/VisitorCounter', {
          method: 'GET',
      });
      let data = await response.json()
      document.getElementById("visitors").innerHTML = data['count'];
      console.log(data);
      return data;
  } catch (err) {
      console.error(err);
  }
}


get_visitors();