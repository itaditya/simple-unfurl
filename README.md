## What is it ?

When you share a link on Fb, Twitter or Whatsapp, you must have noticed that a stylish preview is generated. This is meant to provide good UX to the user and because everyone is providing this, user expects the same from your application. Don't let your users down, **follow the trend**, unfurl those links easily.

## How To Use

```js
const unfurl = require('simple-unfurl');

const url = 'https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c';
const pageData = await unfurl(url);
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

