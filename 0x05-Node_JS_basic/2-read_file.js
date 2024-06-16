// Read file synchronously
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path,'utf8');
    const lines = data.split('\n');
    const header = lines[0]
    const contents = lines.slice(1);
    const content = contents.filter(line => line !== "");
    const cs = [];
    const swe = [];

    for (let line of content) {
      const column = line.split(',');
      if (column[3] === 'CS') {
        cs.push(column[0]);
      } else {
        swe.push(column[0]);
      }
    }

    console.log(`Number of students: ${content.length}`);
    console.log(`Number of students in CS: ${cs.length}. ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length  }. ${swe.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
