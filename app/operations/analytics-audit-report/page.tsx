import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4o"
      systemMessage={OpenAiModels.AuditReports01}
      botIntro={`
### Audit Reports Bot

Welcome to the Audit Reports Bot — your go-to assistant for creating detailed audit reports. This tool is perfect for teams and individuals needing to conduct audits with clear, in-depth analyses of project-related issues. The bot is equipped to tackle each issue step-by-step, ensuring a comprehensive understanding. Whether you need to document project issues or provide structured solutions, this bot promises clarity, structure, and detail in every report.

### Key Features
**Overview**: Provides a concise introduction and high-level summary of audit findings.

**To-Do List**: Offers an actionable list of tasks derived from identified issues.

**Detailed Analysis**: Delivers an in-depth analysis for each problem, including: Issue Identification, Proof/Evidence, Consequences of Inaction, Potential Solutions

`}
    />
  );
};

export default Page;
