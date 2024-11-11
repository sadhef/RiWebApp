import { Router } from 'express';
import { getRevenueAnalytics } from '../../controllers/owner/analytics.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.get('/revenue', verifyOwnerToken, getRevenueAnalytics);

export default router;