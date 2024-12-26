import OpenAI from 'openai';
import { CONFIG } from '../index.config';

const client = new OpenAI({
  apiKey: CONFIG.openAiApiConfig.apiKey,
  dangerouslyAllowBrowser: true,
});

export default client;
