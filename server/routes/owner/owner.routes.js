import { Router } from "express"
import authRouter from "./auth.routes.js"
import turfRouter from "./turf.routes.js"
import reviewsRouter from "./reviews.routes.js"
import bookingsRouter from "./bookings.routes.js"
import dashboardRouter from "./dashboard.routes.js"
import refundRouter from './refund.routes.js';
import bookingEnhancedRouter from './bookingEnhanced.routes.js';
import analyticsRouter from './analytics.routes.js';
import recommendationsRouter from './recommendations.routes.js';
import billGenerationRouter from './billGeneration.routes.js';

const ownerRouter = Router()


ownerRouter.use("/auth",authRouter);
ownerRouter.use("/turf",turfRouter);
ownerRouter.use("/reviews",reviewsRouter);
ownerRouter.use("/bookings",bookingsRouter);
ownerRouter.use("/dashboard", dashboardRouter)
ownerRouter.use("/refund", refundRouter);
ownerRouter.use("/bookingEnhanced", bookingEnhancedRouter);
ownerRouter.use("/analytics", analyticsRouter);
ownerRouter.use('/recommendations', recommendationsRouter);
ownerRouter.use('/bills', billGenerationRouter);
export default ownerRouter;
