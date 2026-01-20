import jwt from 'jsonwebtoken'
import HttpsError from '../models/errrorModel.js'


export const authMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new HttpsError("Unauthorized: No token provided", 401));
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
    if (err) {
      return next(new HttpsError("Unauthorized: Invalid token", 403));
    }

    req.shipper = userData;
    next();
  });
};