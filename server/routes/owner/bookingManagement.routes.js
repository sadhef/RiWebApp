// server/routes/owner/bookingManagement.routes.js
import { Router } from 'express';
import { rescheduleBooking, cancelBooking } from '../../controllers/owner/bookingManagement.controller.js';
import verifyOwnerToken from '../../middleware/jwt/owner.middleware.js';

const router = Router();

router.put('/reschedule/:bookingId', verifyOwnerToken, rescheduleBooking);
router.put('/cancel/:bookingId', verifyOwnerToken, cancelBooking);

export default router;