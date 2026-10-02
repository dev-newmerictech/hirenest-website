if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
  try {
    if (typeof globalThis.localStorage.getItem !== 'function') {
      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
          key: () => null,
          length: 0
        },
        writable: true,
        configurable: true,
      });
    }
  } catch (e) {}
}
