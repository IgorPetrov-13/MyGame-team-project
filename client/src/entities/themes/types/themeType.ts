export type ThemeType = {
  id: number;
  title: string;
  };

export type ThemeWithoutIdType = Omit<ThemeType, 'id'>;

export type ThemeIdType = ThemeType['id'];