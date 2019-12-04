let apiUrl
const apiUrls = {
  production: 'https://secure-plains-22928.herokuapp.com/',
  development: 'https://tylerr36.github.io/jeopardy-client'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
