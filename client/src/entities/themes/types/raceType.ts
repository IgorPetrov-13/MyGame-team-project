export type RaceType = {
  id: number;
  title: string;
  description: number;
};

export type RaceWithoutIdType = Omit<RaceType, 'id'>;

export type RaceIdType = RaceType['id'];