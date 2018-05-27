const cheerio = require('cheerio');
const request = require('superagent');

const metaDataParser = (cheerio, html) => {
  const headStartIndex = html.indexOf('<head')
  const headEndIndex = html.indexOf('</head>') + 7
  const headHtml = html.substring(headStartIndex, headEndIndex)
  const $ = cheerio.load(headHtml)  // build DOM for headHtml
  const getMetaData = name => {
    const query = `meta[name="${name}"]`
    return $(query).attr('content')
  }
  return getMetaData
}

const unfurl = async (url, mapping = {}) => {
  if(!url || typeof url !== 'string') {
    throw 'Url to unfurl not provided'
  }

  const defaultMapping = {
    title: 'title',
    description: 'description',
    imageUrl: 'twitter:image:src'
  }

  mapping = {
    ...defaultMapping,
    ...mapping
  }

  /* fetch html content --Begin-- */
  const response = await request.get(url)
  const html = response.text
  /* fetch html content --End-- */

  const getMetaData = metaDataParser(cheerio, html)  // initialise a metaDataParser

  const mappingArray = Object.entries(mapping)
  const pageData = { url }  // initally pageData only has the url of the page

  for (m of mappingArray) {
    const content = getMetaData(m[1])
    pageData[m[0]] = content
  }
  
  return pageData;
}

module.exports = unfurl
