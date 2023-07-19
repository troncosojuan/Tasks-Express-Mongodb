"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDone = exports.renderTasks = exports.renderTaskEdit = exports.editTask = exports.deletTask = exports.addTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Task = _interopRequireDefault(require("../models/Task"));
var renderTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Task["default"].find().lean();
        case 2:
          tasks = _context.sent;
          console.log(tasks);
          res.render("index", {
            tasks: tasks
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderTasks = renderTasks;
var addTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task, taskSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          task = (0, _Task["default"])(req.body);
          _context2.next = 3;
          return task.save();
        case 3:
          taskSaved = _context2.sent;
          res.redirect("/");
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function addTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addTask = addTask;
var renderTaskEdit = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Task["default"].findById(req.params.id).lean();
        case 3:
          task = _context3.sent;
          res.render("edit", {
            task: task
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.nessage);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderTaskEdit(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderTaskEdit = renderTaskEdit;
var editTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Task["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function editTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.editTask = editTask;
var deletTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Task["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deletTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deletTask = deletTask;
var toggleDone = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Task["default"].findById(id);
        case 3:
          task = _context6.sent;
          task.done = !task.done;
          _context6.next = 7;
          return task.save();
        case 7:
          res.redirect("/");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function toggleDone(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.toggleDone = toggleDone;