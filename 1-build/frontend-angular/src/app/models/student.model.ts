export interface Student {
  id?: number;
  name: string;
  house: House;
}

export enum House {
  GRYFFINDOR = 'GRYFFINDOR',
  SLYTHERIN = 'SLYTHERIN',
  HUFFLEPUFF = 'HUFFLEPUFF',
  RAVENCLAW = 'RAVENCLAW'
}
