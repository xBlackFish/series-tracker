const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect with db!");
    }

    const db = client.db(dbName);

    db.collection("taks")
      .deleteOne({ desc: "Laundry" })
      .then(result => console.log(result.deletedCount))
      .catch(err => console.log(err));

    // db.collection("taks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5cb43ca43dae561438f0f66a") },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("taks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(tasks);
    //   });

    // db.collection("taks").findOne(
    //   { _id: new ObjectID("5cb4428ec9873858348d2d13") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(task);
    //   }
    // );
  }
);
