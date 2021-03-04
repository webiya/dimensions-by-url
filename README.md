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

### Async-Await

```JavaScript
import getImageDimensions from 'dimensions-by-url'

try {
    const {width, height} = await getImageDimensions(url)
}
catch{
    // catch error
}
```

### Promise .then

```JavaScript
import getImageDimensions from 'dimensions-by-url'

getImageDimensions(url).then(({width,height})=> // use width and height
).catch((error)=> // catch error
);
```

---
