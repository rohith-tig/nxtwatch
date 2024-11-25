import { Router } from "express";
import {
  gamingController,
  HomeController,
  trendingController,
  videoController,
} from "../controller/user";

const userRouter = Router();

userRouter.get("/trending", trendingController);
userRouter.get("/gaming", gamingController);
userRouter.get("/home", HomeController);
userRouter.get("/video/:id", videoController);

export default userRouter;
