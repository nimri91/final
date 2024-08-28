const filesys = require('fs');
const Fs = require('fs/promises');
const XLSX = require('xlsx');
const path = require('path');

const read = ({file, sheet, header_index}) => {
   const buf = filesys.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer' });
   const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {range: header_index, defval: null});
   return rows
}

const readDir = ({dir}) => {
   let files = filesys.readdirSync(dir)
   return files[0];
}

const getFileSize = ({f}) => {
   let stats = filesys.statSync(f)
   return stats.size;
}

const getLastDownloadedFilePath = () => {
   const dirPath = 'cypress/downloads';
   const filesOrdered = filesys.readdirSync(dirPath)
     .map(entry => path.join(dirPath, entry))
     .filter(entryWithPath => filesys.lstatSync(entryWithPath).isFile())
     .map(fileName => ({ fileName, mtime: filesys.lstatSync(fileName).mtime }))
     .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
 
   return filesOrdered.length ? filesOrdered[0].fileName : false;
}

module.exports = {
   read,
   readDir,
   getFileSize,
   getLastDownloadedFilePath
}