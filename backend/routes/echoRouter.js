import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.all("/", async (req, res) => {
  res.status(StatusCodes.OK).json({
    method: req.method,
    body: req.body,
  });
});

export { router as echoRouter };
