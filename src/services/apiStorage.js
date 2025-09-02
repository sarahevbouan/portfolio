export const setStorage = (storage, key, item) => {
  storage.setItem(key, JSON.stringify(item));
};

export const getStorage = (storage, key) => {
  const data = storage.getItem(key);
  return data ? JSON.parse(data) : null;
};
