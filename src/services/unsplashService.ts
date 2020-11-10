import { toJson } from 'unsplash-js';
import { unsplashClient } from './api';

const getRandomPhotos = async ({ count = 10 }) => {
  try {
    const json = await unsplashClient.photos.getRandomPhoto({ count });
    const images = await toJson(json);
    const parsedImages = images.map((image) => image.urls.regular);

    return parsedImages;
  } catch (error) {
    throw error.message;
  }
};

export { getRandomPhotos };
