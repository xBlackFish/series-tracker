require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5cb6e854a2a0d4160c34890e")
  .then(() => {
    console.log("Task removed succesfully");
    return Task.countDocuments({ completed: false });
  })
  .then(result => console.log("Uncompleted tasks: " + result))
  .catch(e => console.log(e));


  