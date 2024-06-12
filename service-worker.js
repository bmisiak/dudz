self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Check if the request is for the target domain
    if (url.origin === 'https://grindr.mobi') {
        // Override the user agent
        const modifiedHeaders = new Headers(event.request.headers);
        modifiedHeaders.set('User-Agent', 'grindr/3');

        // Create a new request with modified headers
        const modifiedRequest = new Request(event.request, {
            headers: modifiedHeaders,
            mode: 'cors', // Allow CORS if possible
        });

        // Fetch the modified request
        event.respondWith(fetch(modifiedRequest));
    }
});