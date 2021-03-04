# dimensions-by-url

A simple helper to get width and height of an image by a url.

## Installation

```sh
npm install dimensions-by-url
```

or

```sh
yarn add dimensions-by-url
```

## Usage Example

```javascript
import getImageDimensions from 'dimensions-by-url';

const url = 'https://pngimg.com/uploads/killer_whale/killer_whale_PNG15.png';

// Async-Await
try {
  const { width, height } = await getImageDimensions(url);
  console.log('width: ', width);
  console.log('height: ', height);
} catch (error) {
  console.log(error);
}

// Promise .then
getImageDimensions(url)
  .then(({ width, height }) => {
    console.log('width: ', width);
    console.log('height: ', height);
  })
  .catch(error => console.log(error));
```

---
