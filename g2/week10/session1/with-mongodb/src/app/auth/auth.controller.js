import * as authService from './auth.service.js';

export async function register(req, res, next) {
  try {
    // const {}=req.body;
    const userId = await authService.register(req.body);
    res.status(201).json({ message: "user created successfully", success: true, data: userId });
  } catch (error) {
    next(error);// next() function of signature >> (req,res,next)=>{}
    // next(error) >> function of signature >> (error,req,res,next)=>{}
  }
}