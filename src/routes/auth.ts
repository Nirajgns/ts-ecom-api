import { Router } from "express";
import { signup, login } from "../controllers/auth";

export const authRoutes: Router = Router();

authRoutes.post("/login", login);

authRoutes.post("/signup", signup);
