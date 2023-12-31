export interface InputLoginUserDto {
  password: string;
  email: string;
}
export interface OutputLoginUserDto {
  id: string;
  name: string;
  gameUserId: string;
  email: string;
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
  };
}
