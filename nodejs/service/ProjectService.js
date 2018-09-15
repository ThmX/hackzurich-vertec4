'use strict';


/**
 * Add a new project
 * 
 *
 * body Project Project object that needs to be added
 * no response value expected for this operation
 **/
exports.createProject = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a project
 * 
 *
 * projectId String Project id to delete
 * no response value expected for this operation
 **/
exports.deleteProject = function(projectId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find project by ID
 * Returns a single project
 *
 * projectId String ID of project to return
 * returns Project
 **/
exports.getProjectById = function(projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "_id" : "_id",
  "budget" : 0,
  "start_date" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds all the projects
 *
 * returns List
 **/
exports.readProjects = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "_id" : "_id",
  "budget" : 0,
  "start_date" : "2000-01-23T04:56:07.000+00:00"
}, {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "_id" : "_id",
  "budget" : 0,
  "start_date" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a project
 * 
 *
 * projectId String ID of project that needs to be updated
 * body Project Project object that needs to be added
 * no response value expected for this operation
 **/
exports.updateProject = function(projectId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

