// grabs default ("Matt") and stores it in variable "name"
import name from './exportingFile.js';
console.log(name);

// mixing defaults and named vars (named in curly braces)
import nameAgain, { age, job } from './exportingFile.js';
console.log(nameAgain, age, job);
