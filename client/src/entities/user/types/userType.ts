export type User = {
  id: number;
  email: string;
  name: number;
  password: string;
};

export type UserWithoutId = Omit<User, 'id'>;

export type UserId = User['id'];
