const express = require("express");
require("./db/mongoose");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const port = process.env.PORT || 3000;

// const isInMaintananceMode = false;

// app.use((req, res, next) => {
//   if(isInMaintananceMode) {
//     res.status(503).send('Service temporarily unavailable')
//   } else {
//     next();
//   }
// })

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

// const myFunc = () => {
//   const token = jwt.sign({ _id: 'dummy123' }, 'thisisnewtoken', {expiresIn: '7 days'});
//   console.log(token);

//   console.log(jwt.verify(token, 'thisisnewtoken'));
// }

// myFunc();