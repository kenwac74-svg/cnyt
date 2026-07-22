const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const css = fs
  .readFileSync('assets/css/styles.css', 'utf8')
  .replaceAll('../images/', './assets/images/');
const js = fs.readFileSync('assets/js/main.js', 'utf8');
const portrait = fs
  .readFileSync('assets/images/levan-asatiani.jpg')
  .toString('base64');

html = html
  .replace(
    './assets/images/levan-asatiani.jpg',
    `data:image/jpeg;base64,${portrait}`,
  )
  .replace(
    '<link rel="stylesheet" href="./assets/css/styles.css" />',
    `<style>\n${css}\n</style>`,
  )
  .replace(
    '<script src="./assets/js/main.js"></script>',
    `<script>\n${js}\n</script>`,
  );

fs.writeFileSync('index2.html', html, 'utf8');