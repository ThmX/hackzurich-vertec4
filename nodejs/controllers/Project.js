'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.createProject = function createProject (req, res, next) {
  var body = req.swagger.params['body'].value;
  Project.createProject(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProject = function deleteProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Project.deleteProject(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProjectById = function getProjectById (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Project.getProjectById(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readProjects = function readProjects (req, res, next) {
  Project.readProjects()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProject = function updateProject (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var body = req.swagger.params['body'].value;
  Project.updateProject(projectId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
