"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /jobs - renders a list of all jobs
router.get('/jobs', getAllJobs);
// GET /jobs/:id - render the job requested
router.get('/jobs/:id', getJobById);
exports.default = router;