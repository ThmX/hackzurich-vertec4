'use strict';

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:32768';
const dbName = 'test';

/**
 * Add a new task
 *
 *
 * body Task Task object that needs to be added
 * no response value expected for this operation
 **/
exports.createTask = function (body) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.insertOne(body, (err, r) => {
                if (err) {
                    console.log('error', err);
                    reject();
                } else {
                    console.log('resolved', r);
                    resolve();
                }
            });
        });
    });
};


/**
 * Deletes a task
 *
 *
 * taskId String Task id to delete
 * no response value expected for this operation
 **/
exports.deleteTask = function (taskId) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.deleteOne({_id: projectId}, (err, r) => {
                if (err) {
                    console.log('error', err);
                    reject();
                } else {
                    console.log('resolved', r);
                    resolve();
                }
            });
        });
    });
};


/**
 * Find task by ID
 * Returns a single task
 *
 * taskId String ID of task to return
 * returns Task
 **/
exports.getTaskById = function (taskId) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.findOne({_id: taskId}, (project, err) => {
                if (err) {
                    console.log('error', err);
                    reject();
                } else {
                    console.log('resolved', project);
                    resolve(project);
                }
            });
        });
    });
};


/**
 * Finds all the tasks
 *
 * returns List
 **/
exports.readTasks = function () {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.find({}).toArray((err, projects) => {
                if (err) {
                    console.log('error', err);
                    reject();
                } else {
                    console.log('resolved', projects);
                    resolve(projects);
                }
            });
        });
    });
};


/**
 * Updates a task
 *
 *
 * taskId String ID of task that needs to be updated
 * body Task Task object that needs to be added
 * no response value expected for this operation
 **/
exports.updateTask = function (taskId, body) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.findOneAndUpdate({_id: taskId}, body, (projects, err) => {
                if (err) {
                    console.log('error', err);
                    reject();
                } else {
                    console.log('resolved', projects);
                    resolve();
                }
            });
        });
    });
};
