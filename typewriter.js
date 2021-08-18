const sentence = "hello there from lighthouse labs";
let interval = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + '\n');
  }, interval + 1000);
 interval = interval + 50;
}