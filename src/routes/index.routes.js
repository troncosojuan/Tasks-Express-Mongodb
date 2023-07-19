import { Router } from "express";
import Task from "../models/Task";
import {renderTasks, addTask, renderTaskEdit, editTask, deletTask, toggleDone} from "../controller/task.controller";
const router = Router();

router.get("/", renderTasks);

router.post("/task/add", addTask );

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deletTask);

router.get("/tasks/:id/toggleDone", toggleDone);

export default router;
