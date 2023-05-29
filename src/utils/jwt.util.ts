import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = 'xablau';

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10m',
};

// teste

const verify = (token: string): string | JwtPayload => jwt.verify(token, secret);

const sign = (payload: object): string =>
  jwt.sign({ data: payload }, secret, JWT_CONFIG);

export default {
  sign,
  verify,
};