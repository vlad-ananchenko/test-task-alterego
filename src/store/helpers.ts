import { User } from 'mockup/model/User';
import { IAuthCredentials } from './models/IAuthCredentials';

// We should bcrypt the password but id doesn't matter for this task
export const findUserByUsernameAndPassword = (
  usersFromDb: User[],
  userCredentials: IAuthCredentials
): IAuthCredentials | null => {
  const { username, password } = userCredentials;

  const foundUser =
    usersFromDb
      .filter(user => user.username === username && user.password === password)
      .find(user => user) || null;

  if (!foundUser) {
    return null;
  }

  return {
    username: foundUser?.username,
    password: foundUser?.password
  };
};
