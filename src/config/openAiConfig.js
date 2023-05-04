import { AI_KEY } from "@env"
import { OpenAIApi, Configuration } from "openai";

export const openai = new OpenAIApi(new Configuration({
    apiKey: AI_KEY,
}));