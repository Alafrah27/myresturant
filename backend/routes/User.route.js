import express from "express";
import {
  Login,
  SignUP,
  logout,
  getCurrentUser,
  getAllUser,
  updateUser,
  deleteUser,
} from "../controllers/User.controller.js";

import { protectRoute, isAdminUser } from "../middleWare/Auth.js";
const router = express.Router();

router.post("/signup", SignUP);
router.post("/login", Login);
router.post("/logout", logout);

router.get("/me", protectRoute, getCurrentUser);
router.get("/All-Users", protectRoute, isAdminUser, getAllUser);

router.put("/update/:id", protectRoute, updateUser);
router.delete("/delete/:id", protectRoute, isAdminUser, deleteUser);

export default router;
