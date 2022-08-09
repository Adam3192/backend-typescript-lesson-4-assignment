import { Router } from 'express';
import { getAllJobs, getJobById } from '../controllers/jobsController';

const router = Router();

// GET /jobs - renders a list of all jobs
router.get('/', getAllJobs);

// GET /jobs/:id - render the job requested
router.get('/:id', getJobById);

export default router;