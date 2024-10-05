import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4o"
      systemMessage={OpenAiModels.UpworkModel01}
      botIntro={`
## Upwork Cover Letter Bot:

Welcome to the Upwork Cover Letter Bot — your dedicated assistant for crafting personalized and client-centric cover letters tailored for job applications on platforms like Upwork. This tool is designed for freelancers who want to create clear and impactful cover letters that directly address client needs and project requirements. Perfect for freelancers aiming to apply for jobs with a personalized and structured approach, this bot guarantees clarity and relevance in every cover letter.

### Key Features:

**Client-Centric Language**: Ensures the cover letter speaks directly to the client, emphasizing their needs and avoiding self-referential language.

**Easy-to-Read Format**: Maintains a grade 5 readability level for clarity and accessibility to a wide audience.

**Structured Layout**: Each letter includes: Greeting: A warm and professional opening. Client Needs Focus: A paragraph that clearly outlines the client's pain points and project expectations.

**Establishing Credibility**: A brief section showcasing relevant experience or skills. Call to Action: Encouraging the client to engage further or ask questions. Closing: A professional sign-off.

**Portfolio Inclusion**: Option to include links to relevant portfolio items in a PS section, allowing you to showcase your previous work.
`}
    />
  );
};

export default Page;
