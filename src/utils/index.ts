/* eslint-disable no-undef */

export const timeToText = (time: number) => {
  const date = new Date(time);

  return date
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, '/');
};

export const isDev = process.env.NODE_ENV === 'development';
