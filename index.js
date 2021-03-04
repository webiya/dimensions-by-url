/**
 * Get width and height of an image by url
 * @param {string} url
 * @returns {Promise<{ width: number, height: number }>}
 */

export default url =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const { width, height } = img;
      resolve({ width, height });
    };
    img.onerror = error => reject();
    img.src = url;
  });
