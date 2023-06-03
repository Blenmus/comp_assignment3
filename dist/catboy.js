// Function to fetch and display the image and text from the Catboy API
function fetchAndDisplayData() {
  // Make a GET request to the API for image
  fetch("https://api.catboys.com/img")
    .then((response) => response.json())
    .then((data) => {
      // Get the image URL from the response data
      const imageUrl = data.url;

      // Create an <img> element
      const img = document.createElement("img");
      img.src = imageUrl;

      // Append the image to the container element
      const container = document.getElementById("image-container");
      container.innerHTML = ""; // Clear previous content (if any)
      container.appendChild(img);
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });

  // Make a GET request to the API for text
  fetch("https://api.catboys.com/catboy")
    .then((response) => response.json())
    .then((data) => {
      // Get the response from the response data
      const response = data.response;

      // Create a <p> element
      const responseElement = document.createElement("p");
      responseElement.textContent = response;

      // Apply Tailwind CSS classes to the text element
      responseElement.classList.add(
        "text-pink-200",
        "text-4xl",
        "font-semibold"
      );

      // Append the response to the container element
      const container = document.getElementById("text-container");
      container.innerHTML = ""; // Clear previous content (if any)
      container.appendChild(responseElement);
    })
    .catch((error) => {
      console.error("Error fetching response:", error);
    });
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("refresh-button");
  button.addEventListener("click", fetchAndDisplayData);
});
