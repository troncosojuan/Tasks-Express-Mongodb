"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _Task = _interopRequireDefault(require("../models/Task"));
var _task = require("../controller/task.controller");
var router = (0, _express.Router)();
router.get("/", _task.renderTasks);
router.post("/task/add", _task.addTask);
router.get("/tasks/:id/edit", _task.renderTaskEdit);
router.post("/tasks/:id/edit", _task.editTask);
router.get("/tasks/:id/delete", _task.deletTask);
router.get("/tasks/:id/toggleDone", _task.toggleDone);
var _default = router;
exports["default"] = _default;