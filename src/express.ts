import { Router } from "express";

import ItemRouter from "./modules/item/routes";

const router = Router();

router.use('/item', ItemRouter);

export default router;
