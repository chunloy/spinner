const charArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '   '];
let timeout = 100;

for (const char of charArray) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout += 200)
};