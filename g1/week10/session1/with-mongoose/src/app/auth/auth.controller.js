import * as authService from './auth.service.js';

export async function register(req, res, next) {
  try {
    // const { userName, email, password } = req.body;
    // console.log(req.body);

    const id = await authService.register(req.body);
    res.status(201).json({ message: "user created successfully", success: true, data: id });
  } catch (error) {
    next(error);// middleware >> (req,res,next)=>{}
    // global error handler >> (error,req,res,next)=>{}
  }
}