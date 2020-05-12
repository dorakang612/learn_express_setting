import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.locals.title = "Node Server Setting!!-!";
  res.render("index");
});

export default router;
