import { chatHandler } from "./chatHandler";
import { myPageHandler } from "./myPageHandler";

export const handlers = [...chatHandler, ...myPageHandler];