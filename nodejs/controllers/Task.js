'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.createTask = function createTask (req, res, next) {
  var body = req.swagger.params['body'].value;
  Task.createTask(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTask = function deleteTask (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.deleteTask(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskById = function getTaskById (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  Task.getTaskById(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readTasks = function readTasks (req, res, next) {
  Task.readTasks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTask = function updateTask (req, res, next) {
  var taskId = req.swagger.params['taskId'].value;
  var body = req.swagger.params['body'].value;
  Task.updateTask(taskId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
