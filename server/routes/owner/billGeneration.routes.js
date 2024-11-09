import { Router } from 'express';
import { generateBill, previewBill } from '../../controllers/owner/billGeneration.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.post('/generate/:bookingId', verifyOwnerToken, generateBill);
router.get('/preview/:bookingId', verifyOwnerToken, previewBill);

export default router;