import { initializeApp } from 'firebase/app';
import { CONFIG } from '../config/index.config';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(CONFIG.firebasConfig);
export default app;

export const auth = getAuth();
