import { CherrioWebBasedLoader } from "langchain/document_loaders/web/cheerio";

import { OpenAI } from "langchain/llms/openai";

const loader = new CherrioWebBasedLoader(
  "https://en.wikipedia.org/wiki/Artificial_intelligence"
);

const data = await loader.load();

const llm = new OpenAI();

const query = "Please summarize the following data: ${data[0].pageContent}";

const result = await llm.predict(query);

console.log(result);
