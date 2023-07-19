import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("getALL");
});

router.get("/:id", (req, res) => {
  res.send("getONE");
});

router.post("/", (req, res) => {
  res.send("create");
});

router.put("/:id", (req, res) => {
  res.send("update");
});

router.delete("/:id", (req, res) => {
  res.send("delete");
});

export default router;