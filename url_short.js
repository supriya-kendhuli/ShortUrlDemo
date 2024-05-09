// Define a function to generate a random short code
function generateShortCode() {
  return Math.random().toString(36).substring(2, 8);
}

// Store the mappings of short codes to long URLs
const urlMap = {};

// Function to encode (shorten) the URL
function encodeURL(longURL) {
  const shortCode = generateShortCode();
  urlMap[shortCode] = longURL;
  return shortCode;
}

// Function to decode (redirect) the short URL to the original long URL
function decodeURL(shortURL) {
  const longURL = urlMap[shortURL];
  if (longURL) {
    href = longURL;
  } else {
    alert("Shortened URL not found!");
  }
}

// Function to handle URL shortening when the button is clicked
function shortenURL() {
  const longUrlInput = document.getElementById('longUrlInput');
  const longURL = longUrlInput.value.trim();
  if (longURL !== '') {
    /*const shortURL = encodeURL(longURL);
    const shortUrlDisplay = document.getElementById('shortUrlDisplay');*/

    // Generate a unique short code (e.g., using hashing algorithms)
    const shortCode = generateShortCode();
    // Construct the shortened URL using the short code
    const shortenedURL = "https://bit.ly/" + shortCode;
    // Store the mapping between short code and long URL in a database or cache
    //saveMapping(shortCode, longURL);
    //return shortenedURL;
    alert(shortenedURL);

    shortUrlDisplay.innerHTML = `Shortened URL: <a href="${shortenedURL}" target="_blank">${shortenedURL}</a>`;
  } else {
    alert("Please enter a valid URL!");
  }
}

function generateShortCodes(longURL) {
  // Generate a unique short code (e.g., using hashing algorithms)
  // Example: Convert longURL to hash and take the first 6 characters
  const hashCode = generateShortCode(longURL);
  return hashCode.slice(0, 6);
}
