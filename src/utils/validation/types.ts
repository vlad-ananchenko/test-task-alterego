import { TypeOf } from 'yup';
import { loginSchema } from './auth';

export type LoginInput = TypeOf<typeof loginSchema>;
