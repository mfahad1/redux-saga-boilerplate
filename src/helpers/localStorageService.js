function set(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function get(key) {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
}

const localStorageService = {
  set,
  get,
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

export default localStorageService;
