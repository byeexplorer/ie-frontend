const getFilePath = (path: string) => `/images${path}`;

export const IMAGES = {
  BUG: {
    BUG1: getFilePath('/bugs/bug1.png'),
    BUG2: getFilePath('/bugs/bug2.png'),
    BUG3: getFilePath('/bugs/bug3.png'),
    BUG4: getFilePath('/bugs/bug4.png'),
    BUG5: getFilePath('/bugs/bug5.png'),
  },
  BROWSER: {
    EXPLORER: getFilePath('/browser/explorer.png'),
    CHROME: getFilePath('/browser/chrome.png'),
    FIREFOX: getFilePath('/browser/firefox.png'),
    SAFARI: getFilePath('/browser/safari.webp'),
  },
};
