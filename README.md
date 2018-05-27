## What is it ?

When you share a link on Fb, Twitter or Whatsapp, you must have noticed that a stylish preview is generated. This is meant to provide good UX to the user and because everyone is providing this, user expects the same from your application. Don't let your users down, **follow the trend**, unfurl those links easily.

[![npm version](https://badge.fury.io/js/simple-unfurl.svg)](https://badge.fury.io/js/simple-unfurl) [![npm](https://img.shields.io/npm/dm/simple-unfurl.svg)](https://www.npmjs.com/package/simple-unfurl) 
![Github file size](https://img.shields.io/github/size/itaditya/simple-unfurl/index.js.svg)
 [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://badge.fury.io/js/simple-unfurl) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) 

## How To Use

```js
const unfurl = require('simple-unfurl');

const url = 'https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c';
const pageData = await unfurl(url);

// Output
{
  url: 'https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c',
  title: 'How to escape async/await hell - freeCodeCamp',
  description: "async/await freed us from callback hell, but people have started abusing it - leading to the birth of async/await hell. In this article, I will try to explain what async/await hell is, and I'll also.",
  imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*_3nDjjPTWn4ohLt96IcwCA.png'
}
```

### You can check the [demo](/demo) for a fully working example

## API

```js
unfurl(url, mapping)
```
| Argument Name  | Type   | Description                     | Required | Default |
| -------------  | ------ | ----------------------------    | -------- | ------- |
| url            | String | link to generate preview for    | true     | N/A     |
| mapping        | Object | map object key to meta tag name | false    | { title: 'title', description: 'description', imageUrl: 'twitter:image:src' } |
