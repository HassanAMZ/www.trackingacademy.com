import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4-turbo"
      systemMessage={OpenAiModels.UpworkModel01}
      botIntro={`**Upwork Cover Letter Bot:**

   This bot specializes in crafting **simple, direct, and client-focused cover letters** for job applications. It is perfect for freelancers applying for jobs on platforms like Upwork, aiming to write a personalized and concise cover letter that speaks directly to the client’s pain points and project needs. 

   **Key Features:**
   - **Client-Focused Tone:** The bot ensures the cover letter is focused on the client, avoiding self-centric language like "I" or "Me."
   - **Simple and Readable:** The generated letters maintain a grade 5 readability level, making them easily understandable for a broad audience.
   - **Structured Approach:** Each cover letter includes a greeting, a paragraph focused on the client’s needs, a brief section establishing authority, a call to action, and a closing.
   - **Optional Portfolio Links:** If relevant, the bot can include portfolio items in a PS section to showcase previous work.
   
   **Ideal Use Case:** This bot is ideal for freelancers looking to apply for jobs with a personalized touch, while keeping the letter simple, clear, and focused on the client's needs.
`}
    />
  );
};

export default Page;
