import UserModel, { UserSequelizeModel } from '../database/models/user.model';

async function verifyLogin(username: string): Promise<UserSequelizeModel | null> {
  const user = (await UserModel.findOne({ where: { username } }));
  return user;
}

export default {
  verifyLogin,
};
