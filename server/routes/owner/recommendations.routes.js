import { Router } from 'express';
import { getRecommendations } from '../../controllers/owner/recommendations.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.get('/', verifyOwnerToken, getRecommendations);

export default router;
