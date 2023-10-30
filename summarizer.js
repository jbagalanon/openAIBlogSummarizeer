import { CherrioWebBasedLoader } from "langchain/document_loaders/web/cheerio";

import { OpenAI } from "langchain/llms/openai";

const loader = new CherrioWebBasedLoader(
  "https://www.thephdefense.com/2023/05/enhancing-philippine-air-force-with-more-c-130/"
);

const data = await loader.load();

const llm = new OpenAI();

const query = "Please summarize the following data: ${data[0].pageContent}";

const result = await llm.query(query);

console.log(result);
