import { Router } from "express";
import userRouter from "./user";

const router = Router();

router.get("/", (req, res) => {
  res.send("hello motto");
});

router.use("/", userRouter);

export default router;
