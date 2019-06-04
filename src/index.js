const express = require("express");
require("./db/mongoose");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

const Task  = require("./models/task");
const User  = require("./models/user");


const main = async () => {
    // const task = await Task.findById("5cebd0b94b7a8b01f066944b");
    // await task.populate("owner").execPopulate();
    // console.log(task.owner);

    const user = await User.findById('5cebd0a34b7a8b01f0669449')
    await user.populate('tasks').execPopulate();
    
    console.log(user.tasks);

}

main();