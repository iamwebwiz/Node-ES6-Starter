import express from "express";
import { index } from "../controllers/SampleController";

const router = express.Router();

router.get("/", index);

export default router;
