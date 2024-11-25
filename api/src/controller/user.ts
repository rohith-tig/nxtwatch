import { Request, Response } from "express";
import {
  getTrendingData,
  getGamingData,
  getHomeData,
  videoData,
} from "../service/user";

export const trendingController = async (req: Request, res: Response) => {
  const authorization = req.headers.authorization?.split(" ")[1] || "";

  try {
    const result = await getTrendingData(authorization);
    res.status(200).send(result);
  } catch (error) {
    console.log("trendingController Error:", error);
  }
};
export const gamingController = async (req: Request, res: Response) => {
  const authorization = req.headers.authorization?.split(" ")[1] || "";

  try {
    const result = await getGamingData(authorization);
    res.status(200).send(result);
  } catch (error) {
    console.log("gamingController Error:", error);
  }
};

export const HomeController = async (req: Request, res: Response) => {
  const searched =
    typeof req.query.searched === "string" ? req.query.searched : "";
  console.log("searched:", searched);

  const authorization = req.headers.authorization?.split(" ")[1] || "";

  try {
    const result = await getHomeData(authorization, searched);
    res.status(200).send(result);
  } catch (error) {
    console.log("HomeController Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const videoController = async (req: Request, res: Response) => {
  const authorization = req.headers.authorization?.split(" ")[1] || "";
  const id = req.params.id;
  console.log(id);

  try {
    const result = await videoData(authorization, id);
    res.status(200).send(result);
  } catch (error) {
    console.log("HomeController Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
