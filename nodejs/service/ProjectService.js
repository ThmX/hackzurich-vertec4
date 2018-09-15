'use strict';

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:32768';
const dbName = 'test';

/**
 * Add a new project
 *
 *
 * body Project Project object that needs to be added
 * no response value expected for this operation
 **/
exports.createProject = function (body) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('projects');

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
 * Deletes a project
 *
 *
 * projectId String Project id to delete
 * no response value expected for this operation
 **/
exports.deleteProject = function (projectId) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('projects');

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
 * Find project by ID
 * Returns a single project
 *
 * projectId String ID of project to return
 * returns Project
 **/
exports.getProjectById = function (projectId) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('projects');

            col.findOne({_id: projectId}, (project, err) => {
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
 * Finds all the projects
 *
 * returns List
 **/
exports.readProjects = function () {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('projects');

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
 * Updates a project
 *
 *
 * projectId String ID of project that needs to be updated
 * body Project Project object that needs to be added
 * no response value expected for this operation
 **/
exports.updateProject = function (projectId, body) {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('projects');

            col.findOneAndUpdate({_id: projectId}, body, (projects, err) => {
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
