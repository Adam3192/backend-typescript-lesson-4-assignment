import { Router } from 'express';
import { getAllJobs, getJobById } from '../controllers/jobsController';

const router = Router();

// GET /jobs - renders a list of all jobs
router.get('/jobs', getAllJobs);

// GET /jobs/:id - render the job requested
router.get('/jobs/:id', getJobById);

export default router;