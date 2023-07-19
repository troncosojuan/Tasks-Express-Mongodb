import Task from "../models/Task";


export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    console.log(tasks);
    res.render("index", { tasks: tasks });
  }

export const addTask = async (req, res) => {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  }

  export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.log(error.nessage);
    }
  }

 export const editTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  }

export const deletTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  }

export const toggleDone = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  }