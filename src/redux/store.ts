import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './skillsSlice';
import projectsReducer from './projectsSlice';

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
