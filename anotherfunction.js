function Gandalf() {
   console.log("You shall not pass!")
}

call(3, Gandalf)
// You shall not pass!
// You shall not pass!
// You shall not pass!

call(1, function run() {
   console.log("Fly, you fools!")
})
// Fly, you fools!
