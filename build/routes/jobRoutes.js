"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobsController_1 = require("../controllers/jobsController");
const router = (0, express_1.Router)();
// GET /jobs - renders a list of all jobs
router.get('/jobs', jobsController_1.getAllJobs);
// GET /jobs/:id - render the job requested
router.get('/jobs/:id', jobsController_1.getJobById);
exports.default = router;
