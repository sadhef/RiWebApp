// server/routes/owner/bookingEnhanced.routes.js
import { Router } from "express";
import { 
  getBookingAnalytics, 
  rescheduleBooking, 
  processRefund 
} from "../../controllers/owner/bookingEnhanced.controller.js";
import verifyOwnerToken from "../../middleware/jwt/owner.middleware.js";

const router = Router();

router.get("/analytics", verifyOwnerToken, getBookingAnalytics);
router.put("/reschedule/:bookingId", verifyOwnerToken, rescheduleBooking);
router.post("/refund/:bookingId", verifyOwnerToken, processRefund);

export default router;