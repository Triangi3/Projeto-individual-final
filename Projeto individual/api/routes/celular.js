import express from "express";
import { addcelular, deletecelular, getcelular, updatecelular } from "../controllers/celular.js";

const router = express.Router()

router.get("/", getcelular)

router.post("/", addcelular)

router.put("/:id", updatecelular)

router.delete("/:id", deletecelular)

export default router