import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4-turbo"
      systemMessage={OpenAiModels.AuditReports01}
      botIntro={`**Audit Reports Bot:**
        This bot is designed to assist with generating **detailed audit reports** based on a list of issues or input data. It is ideal for teams or individuals conducting audits who need clear, in-depth analysis of specific problems within a project. The bot follows a structured approach to reporting, breaking down each issue into multiple sections to provide a comprehensive understanding of each. 

        **Key Features:**
        - **Overview:** A brief introduction and high-level summary of the audit findings.
        - **To-Do List:** An actionable list of tasks based on the identified issues.
        - **Detailed Analysis:** For each issue, the bot generates a detailed paragraph covering issue identification, proof/evidence, consequences of inaction, and potential solutions.
        - **Grade 5 Readability:** Ensures that reports are easy to understand, using simple language while maintaining technical accuracy.
        
        **Ideal Use Case:** This bot is perfect for anyone needing to document issues and provide solutions in a clear, structured, and detailed manner.
`}
    />
  );
};

export default Page;
