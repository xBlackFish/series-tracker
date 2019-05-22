const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});



// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// });

// const testTask = new Task({
//   description: "Test task 2 ",
//   completed: false
// });

// testTask
//   .save()
//   .then(() => console.log(testTask))
//   .catch(err => console.log(err));

// const testUser = new User({
//   name: "Kuba ",
//   email: "kuba@kuba.com ",
//   password: 'dupa1234 '
// });

// testUser
//   .save()
//   .then(() => console.log(testUser))
//   .catch(err => console.log("Error!", err));
