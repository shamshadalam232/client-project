import express from "express";

import upload from "../middlewares/upload.js";

import auth from "../middlewares/auth.js";

import {
  createProfile,
  getProfiles,
  deleteProfile,
  updateProfile
} from "../controllers/profileControllers.js";

const router = express.Router();

router.get("/", getProfiles);

router.post(
  "/",
  auth,
  upload.single("image"),
  createProfile
);

router.put(
  "/:id",

  auth,

  upload.single("image"),

  updateProfile
);

router.delete(
  "/:id",
  auth,
  deleteProfile
);

export default router;