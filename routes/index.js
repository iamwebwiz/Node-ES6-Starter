import express from "express";
import { index, users } from "../controllers/SampleController";
const router = express.Router();

router.get("/", index);
router.get("/users", users);

export default router;
