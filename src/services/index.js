import { loginAdmin, refreshToken, getCode } from "./auth.service";
import {
  getBanned,
  createBanned,
  updateBanned,
  deleteBanned,
} from "./banned.service";

import { predictImage } from "./predict.service";

export {
  loginAdmin,
  refreshToken,
  getBanned,
  createBanned,
  updateBanned,
  deleteBanned,
  getCode,
  predictImage,
};
