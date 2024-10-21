import express from "express";
import { homepage, login, logout } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/login", login);
router.post("/homepage", homepage);
router.post("/logout", logout); // Logout route

export default router;
