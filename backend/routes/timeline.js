import express from 'express';

import {
  create,
  read,
  readOne,
  update,
  destroy
} from '../controllers/timeline.controller.js';

const router = express.Router();

router.post("/", create);
router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;