// DONT EDIT THIS FILE !
// If you edit this file, the program may not work properly.
const crpyto = require('crypto');
const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs')
const algorithm = "aes-128-cbc"
const initvector = crpyto.randomBytes(16);
const Securitykey = crpyto.randomBytes(16);
console.clear()

console.log(`

J)jjjjjj  S)ssss  E)eeeeee                                           t)                   
    J)   S)    ss E)                                               t)tTTT                 
    J)    S)ss    E)eeeee  n)NNNN   c)CCCC  r)RRR  y)   YY p)PPPP    t)    o)OOO   r)RRR  
J)  jj        S)  E)       n)   NN c)      r)   RR y)   YY p)   PP   t)   o)   OO r)   RR 
J)  jj   S)    ss E)       n)   NN c)      r)      y)   YY p)   PP   t)   o)   OO r)      
 J)jj     S)ssss  E)eeeeee n)   NN  c)CCCC r)       y)YYYY p)PPPP    t)T   o)OOO  r)      
                                                        y) p)                             
                                                   y)YYYY  p)                             
`)
console.log(`Algorithm : ${algorithm}`)

const password = prompt('Enter [ Password | Text ] :')

const cipher = crpyto.createCipheriv(algorithm, Securitykey, initvector);
let encrypt = cipher.update(password, "utf-8", "hex");
encrypt += cipher.final("hex");

console.log('----- SUCCESSFUL -----\nOperation successfuly compeleted.\nLook encrypts.txt for more information.')
const writeinfo = `
--- INFO ---
Not Encrypted : ${password}
Encrypted : ${encrypt}
Completed in : ${process.uptime()}
CPU architecture : ${process.arch}
Algorithm : ${algorithm}
`
fs.writeFileSync('encrypts.txt', writeinfo,
{
    flag: "a"
}
)