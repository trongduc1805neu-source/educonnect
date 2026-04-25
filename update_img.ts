import fs from 'fs';

let content = fs.readFileSync('src/data/tutors.ts', 'utf8');

content = content.replace(
  /("name": "Nguyễn Ngọc Huyền",[\s\S]*?"photoURL": ")(.*?)(")/,
  '$1https://i.ibb.co/Fk801sB1/image.png$3'
);

fs.writeFileSync('src/data/tutors.ts', content);
console.log('Update complete.');
