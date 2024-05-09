function encodeURL(longURL) {
    
    const shortCode = generateShortCode(longURL);
    
    const shortenedURL = "https://shorturl.com/" + shortCode;
    
    saveMapping(shortCode, longURL);
    return shortenedURL;
}

function generateShortCode(longURL) {
   
    const hashCode = hashFunction(longURL);
    return hashCode.slice(0, 6);
}

function saveMapping(shortCode, longURL) {
    
    database.save(shortCode, longURL);
}


function decodeURL(shortenedURL) {
    
    const shortCode = extractShortCode(shortenedURL);
    
    const longURL = retrieveLongURL(shortCode);
    
    redirectToURL(longURL);
}

function extractShortCode(shortenedURL) {
    
    return shortenedURL.substring("https://shorturl.com/".length);
}

function retrieveLongURL(shortCode) {
    
    return database.get(shortCode);
}

function redirectToURL(longURL) {
    
    window.location.href = longURL;
}
