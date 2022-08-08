"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobById = exports.getAllJobs = exports.defaultJobs = void 0;
const job_data_1 = require("../models/job-data");
const defaultJobs = (req, res, next) => {
    res.redirect('/jobs');
};
exports.defaultJobs = defaultJobs;
const getAllJobs = (req, res, next) => {
    res.render('all-jobs', {
        jobList: job_data_1.jobList
    });
};
exports.getAllJobs = getAllJobs;
const getJobById = (req, res, next) => {
    // get the route parameter called "name"
    let jobName = req.params.id;
    // use the find method to get the job that matches the provided name
    let foundJob = job_data_1.jobList.find(job => {
        return job.jobTitle === jobName;
    });
    // if the job was not found, return not found
    if (!foundJob) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        });
    }
    // render the view with the found job
    res.render('job-detail', {
        foundJob
    });
};
exports.getJobById = getJobById;
