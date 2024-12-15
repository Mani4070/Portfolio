import { createSlice } from '@reduxjs/toolkit';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

const initialState: Project[] = [
  {
    id: 1,
    title: 'Personal Blog',
    description: 'A blog platform built with NestJS and PostgreSQL.',
    link: '#',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'An e-commerce platform built with React and Redux.',
    link: '#',
    image: 'https://via.placeholder.com/150',
  },
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
