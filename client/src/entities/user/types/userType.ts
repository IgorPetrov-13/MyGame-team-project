export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  score: number;
};

export type UserWithoutId = Omit<User, 'id'>;

export type UserId = User['id'];
