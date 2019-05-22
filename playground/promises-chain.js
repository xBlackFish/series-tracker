require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findOneAndDelete("5cb5d751772ad30dccf0ab69", { age: 30 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 0 });
//   })
//   .then(result => console.log(result))
//   .catch(e => console.log(e));

const findOneAndUpdate = async (id, status) => {
  const task = await Task.findByIdAndUpdate(id, { completed: status });
  const count = await Task.countDocuments({ completed: status });
  return count;
};

findOneAndUpdate("5cb5b9157b9b5f404c199c71", true)
  .then(res => console.log("Count: ", res))
  .catch(e => console.log("Error: ", e));
