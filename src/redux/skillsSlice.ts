import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Skill {
  name: string;
}

const initialState: Skill[] = [
  { name: 'React' },
  { name: 'Redux' },
  { name: 'Node.js' },
  { name: 'NestJS' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;
