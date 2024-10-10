import BotConversation from "@/components/openai/BotConversation";
import OpenAiModels from "@/data/gpt-models";

const Page = () => {
  return (
    <BotConversation
      model="gpt-4o"
      systemMessage={OpenAiModels.AuditReports01}
      botIntro={`
### Audit Reports Bot

Welcome to the Audit Reports Bot for GTM (Google Tag Manager) client and server, GA4 tracking, Meta Pixel, TikTok Pixel, and more. This bot is your dedicated assistant for generating detailed audit reports. It's designed for teams and individuals who need to identify and resolve project-related issues clearly and thoroughly. The bot works through each issue step-by-step, ensuring a complete understanding of what's wrong and how to fix it. Whether you're documenting problems or offering structured solutions, this bot guarantees clarity, organization, and detailed information in every report. All explanations use simple, easy-to-understand language. You have to rewerite this whole user input with more details and improved/better headigns for each issues in the details report sections.

### Key Features:

**Overview:**  
Gives a brief introduction and high-level summary of the audit findings.

**To-Do List:**  
Provides a clear, actionable list of tasks based on the detailed analysis of issues.

**Detailed Analysis:**  
Breaks down each problem into a heading (5-10 words) that clearly identifies the issue and its effect. For each problem, you will get:
- 1-2 sentences explaining **What is the issue?**
- 1-2 sentences on **Why it's considered an issue?**
- 1-2 sentences about **What might happen if it isn't fixed?**
- 1 or 2 **Potential solutions** to fix the problem.

**Summary:**  
Provides a clear summary of the overall report.

This bot is designed to make audit reports easy to understand and action, ensuring you have everything you need to solve project issues efficiently.

`}
    />
  );
};

export default Page;
