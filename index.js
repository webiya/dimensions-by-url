/**
 * Get width and height of an image by url
 * @param {string} url
 * @returns {Promise<{ width: number, height: number }>}
 */

export default (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const { width: imageWidth, height: imageHeight } = img;
      resolve({ imageHeight, imageWidth });
    };
    img.onerror = (error) => reject(error);
    img.src = url;
  });
