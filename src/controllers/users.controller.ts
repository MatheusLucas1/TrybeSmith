import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import loginService from '../services/users.service';
import jwtUtil from '../utils/jwt.util';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const user = await loginService.verifyLogin(username);

  if (!user) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const isValidPass: boolean = await bcrypt.compare(password, user.dataValues.password);
  if (!isValidPass) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = jwtUtil.sign({ id: user.dataValues.id, username: user.dataValues.username });

  return res.status(200).json({ token });
}

export default {
  login,
};