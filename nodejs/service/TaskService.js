'use strict';


/**
 * Add a new task
 * 
 *
 * body Task Task object that needs to be added
 * no response value expected for this operation
 **/
exports.createTask = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a task
 * 
 *
 * taskId String Task id to delete
 * no response value expected for this operation
 **/
exports.deleteTask = function(taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find task by ID
 * Returns a single task
 *
 * taskId String ID of task to return
 * returns Task
 **/
exports.getTaskById = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "project_id" : "project_id",
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
 * Finds all the tasks
 *
 * returns List
 **/
exports.readTasks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "project_id" : "project_id",
  "name" : "name",
  "description" : "description",
  "_id" : "_id",
  "budget" : 0,
  "start_date" : "2000-01-23T04:56:07.000+00:00"
}, {
  "end_date" : "2000-01-23T04:56:07.000+00:00",
  "project_id" : "project_id",
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
 * Updates a task
 * 
 *
 * taskId String ID of task that needs to be updated
 * body Task Task object that needs to be added
 * no response value expected for this operation
 **/
exports.updateTask = function(taskId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

