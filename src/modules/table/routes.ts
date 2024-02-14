import { Router } from "express";
import { create, getById, list } from "./controller";

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getById);

export default router;
