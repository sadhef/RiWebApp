
import { Router } from "express";
import {
  getBookings,
  createOrder,
  verifyPayment,
  getBookingDetails
} from "../../controllers/user/booking.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const bookingRouter = Router();
bookingRouter.get("/get-bookings", verifyUserToken, getBookings);
bookingRouter.get("/details/:bookingId", verifyUserToken, getBookingDetails);
bookingRouter.post("/create-order", verifyUserToken, createOrder);
bookingRouter.post("/verify-payment", verifyUserToken, verifyPayment);

export default bookingRouter;