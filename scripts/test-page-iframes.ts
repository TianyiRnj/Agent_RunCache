import { AgentRunCache } from "agent-run-cache";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const agent = new AgentRunCache({
    debug: true,
    llm: {
      provider: "anthropic",
      model: "claude-sonnet-4-0",
    },
  });

  const page = await agent.newPage();
  page.ai(
    "Go to https://demo.automationtesting.in/Frames.html and select the iframe with in iframe tab and fill in the text box in the nested iframe"
  );
})();
