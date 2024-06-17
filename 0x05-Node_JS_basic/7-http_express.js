// Read file asynchronously
const fs = require('fs');

function parseData(data) {
  try {
    const lines = data.split('\n');
    const header = lines[0]
    const contents = lines.slice(1);
    const content = contents.filter(line => line !== "");
    const cs = [];
    const swe = [];
    const result = [];

    for (let line of content) {
      const column = line.split(',');
      if (column[3] === 'CS') {
        cs.push(column[0]);
      } else {
        swe.push(column[0]);
      }
    }

    result.push(`Number of students: ${content.length}`);
    result.push(`Number of students in CS: ${cs.length}. ${cs.join(', ')}`);
    result.push(`Number of students in SWE: ${swe.length  }. ${swe.join(', ')}`);
    return result.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(parseData(data));
    })
  })
}

// A simple express app
const filepath = process.argv.length > 2 ? process.argv[2] : ""
const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const result = ['This is the list of our students']
  let students;
  if (filepath !== "") {
    students = await countStudents(filepath);
  } else {
    students = "";
  }
  result.push(students);
  res.send(result.join('\n'));
});

app.listen(port, () => {
  console.log(`Started server at http://localhost:${port}`)
});

module.exports = app;
