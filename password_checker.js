const fs = require('fs');
const lineReader = require('line-reader');
const password = process.argv.slice(2)[0];

const processLineByLine = () => {
  let response = '';
  const fileStream = fs.createReadStream('passwords.txt');

  lineReader.eachLine(fileStream, (line, last) => {
    if (line === password) {
      response = `la contraseña '${line}' ha sido encontrada en la base de datos`;
      console.log(response);
      return false;
    } else if (last && line !== password) {
      response = `la contraseña '${password}' NO ha sido encontrada en la base de datos`;
      console.log(response);
    }
  })
}

processLineByLine();