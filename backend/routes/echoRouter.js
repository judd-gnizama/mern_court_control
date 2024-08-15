import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.all("/", async (req, res) => {
  res.status(StatusCodes.OK).json({
    message: req.body.concat("from server"),
  });
});

export { router as echoRouter };
