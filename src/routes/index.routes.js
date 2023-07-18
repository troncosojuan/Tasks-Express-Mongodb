import { Router } from "express";
import Task from "../models/Task";
const router = Router();

router.get("/", async(req, res) => {

  const tasks = await Task.find().lean()
  res.render("index", {tasks: tasks});
});

router.post("/task/add", async (req, res) => {
  const task = Task(req.body);
  const taskSaved = await task.save();
  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
