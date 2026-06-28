import { store } from '@/redux/store';

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the dispatch type from the store
export type AppDispatch = typeof store.dispatch;
