import { Router } from "express";

import ItemRouter from "./modules/item/routes";
import TableRouter from "./modules/table/routes";

const router = Router();

router.use('/item', ItemRouter);
router.use('/table', TableRouter);

export default router;
