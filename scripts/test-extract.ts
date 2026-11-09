import { z } from "zod";
import { AgentRunCache } from "agent-run-cache";
import dotenv from "dotenv";

dotenv.config();

const agent = new AgentRunCache();

(async () => {
  const page = await agent.newPage();
  await page.goto("https://flights.google.com", { waitUntil: "load" });
  const res = await page.extract("What are the preselected options?");
  console.log(res);
  const res2 = await page.extract(
    "What are the preselected options?",
    z.object({
      options: z.array(z.string()),
    })
  );
  console.log(res2);
})();
