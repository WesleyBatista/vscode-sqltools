const EXT_ID = 'sqltools';

const transform = (content) => {
  content = JSON.parse(content.toString())
  content.name = EXT_ID;
  content.main = './extension.js';
  content.engines = {
    vscode: '^1.36.0'
  };
  [
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'targets',
    'source',
    'private',
    'extensionMain',
  ].forEach(k => (delete content[k]))
  return JSON.stringify(content, null, process.env.NODE_ENV === 'production' ? undefined : 2);
}

let content = "";

const stdin = process.openStdin();
stdin.on('data', function (chunk) {
  content += chunk;
});

stdin.on('end', function () {
  process.stdout.write(transform(content));
  process.exit(0);
});