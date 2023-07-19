"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _config = require("./config");
var _app = _interopRequireDefault(require("./app"));
require("./database.js");
_app["default"].listen(_config.PORT);
console.log("PORT: ", _config.PORT);