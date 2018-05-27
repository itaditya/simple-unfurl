const unfurl = require('../');

(async () => {
  // const urls = ['http://www.tothenew.com/blog/javascript-slice-vs-substring-vs-substr/']
  const url = 'https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c'
  const mapping = {
    authorTwitterHandle: 'twitter:creator'
  }
  try {
    const pageData = await unfurl(url, mapping)
    console.log('pageData', pageData);
  } catch(err) {
    console.log('Erorr Occurred --\n', err)
  }
})()
