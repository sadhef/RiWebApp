import { Router } from 'express';
import { processRefund } from '../../controllers/owner/refund.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.post('/:bookingId/refund', verifyOwnerToken, processRefund);

export default router;