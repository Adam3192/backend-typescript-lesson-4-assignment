import { RequestHandler } from "express";
import { Job } from "../models/Job";
import { jobList } from '../models/job-data';

export const defaultJobs: RequestHandler = (req, res, next) => {
    res.redirect('/jobs');
}

export const getAllJobs: RequestHandler = (req, res, next) => {
    res.render('all-jobs', {
        jobList
    });
}

export const getJobById: RequestHandler = (req, res, next) => {

    // get the route parameter called "name"
    let jobName = req.params.id;

    // use the find method to get the job that matches the provided name
    let foundJob = jobList.find(job => {
        return job.jobTitle === jobName;
    })

    // if the job was not found, return not found
    if (!foundJob) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        })
    }

    // render the view with the found job
    res.render('job-detail', {
        foundJob
    })
}