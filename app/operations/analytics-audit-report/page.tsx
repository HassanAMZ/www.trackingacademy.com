import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4o"
      systemMessage={OpenAiModels.AuditReports01}
      botIntro={OpenAiModels.AuditReports01}
    />
  );
};

export default Page;
