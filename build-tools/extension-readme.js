const EXT_NAME = 'SQLTools';

const transform = (content) => {
  content = content.toString();
  const hrPos = content.indexOf('<hr');
  content = `# ${EXT_NAME} extension for Visual Studio Code\n${content.substring(hrPos).replace(/^<hr * \/>/, '')}`;
  return content;
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