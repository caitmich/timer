const args = process.argv.slice(2);

const timer = function(args){

  for(const arg of args){
    if(arg === ""){
      break;
    }
    if(arg > 0 && arg != NaN){
setTimeout(() => {
  process.stdout.write('\x07');
},
(arg * 1000)
)
  }
}
};

timer(args);