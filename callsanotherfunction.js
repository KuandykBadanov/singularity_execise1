function Gandalf() {
   console.log("You shall not pass!")
}

function call(num, func) {
  for (i = 0; i < num; i++) {
    func();
  }
  
} 
call(3, Gandalf)
// You shall not pass!
// You shall not pass!
// You shall not pass!

call(1, function run() {
   console.log("Fly, you fools!")
})
// Fly, you fools!
