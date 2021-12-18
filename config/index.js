const dev = process.env.NODE_ENV !== 'production'

// export const serverUrl = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
// Beware of Error : "Unexpected token < in JSON at position 0"
// during `npm run build` or the like.
// The reason is that when hitting an invalid url, HTML will be returned and 
// JSON.parse will fail on '<DOCTYPE....' or something like that.
export const serverUrl = dev ? 'http://localhost:3000' : 'http://localhost:3000'
