import { initializeApp } from 'firebase/app';
import { CONFIG } from '../config/index.config';

// Initialize Firebase
const app = initializeApp(CONFIG.firebasConfig);
export default app;
