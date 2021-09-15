require("../src/db/mongoose");
const Task = require("../src/models/tasks");

const delelteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

delelteTaskAndCount("614148e3e0970264a4ecf12d")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
// Task.findByIdAndDelete("614149071b69efcdd19e5b58")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
