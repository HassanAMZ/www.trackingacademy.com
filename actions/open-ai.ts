"use server";

import { openai } from "@/lib/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(history: Message[]) {
  "use server";

  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      // system: `

      //   ## Template [PITCH Framewrok]

      //   Hi [if the Name of the client is mentioned, insert, else don't do anything]

      //   I have recorded this short loom video for you: https://loom.com/.....

      //   [LEAD Framework][Mention the issues with the client's job and why it's important to them - discussing the pain point to show that we know why the job is important to the client] [Mention the proof, that we have done exactly the same for others] [Pick one of the REASON to Direct towards the CTA].

      //   [MEET Framework] Do you need a [Title of the Job Post] expert? [Ask for the Website link, if the link is not provided or ask 1 short and very critical question that is necessary to know before starting the Job related to tracking setup in the Job Post]

      //   💌  Hassan

      //   [BOOST framework] P.s. Thank You [if the Name of the client is mentioned, insert, else don't do anything], for reading my cover letter. Be sure to check out my profile, one of our 5-Star reviews is from [If you can find a relevant Portfolio item to the Job then Get the name from the relevant Portfolio/Project list], where we have completed a [Title of the Job Post] job very similar to yours [If you can find a relevant Portfolio item to the Job then Paste the link from the relevant Portfolio/Project list. Add full link, do not add the text and then hyperlink].
      //   # Updated Upwork Cover Letter Generation Prompt

      //   Generate a compelling Upwork cover letter based on the following structure and guidelines. The tone should be conversational, simple to read and understand, and direct. Use simple sentences and avoid passive voice. Do not use sales/marketing pitch tone. Avoid cringe words that sound overly professional such as "keen eye", "deep dive" etc. Use sentences and words that are commonly used by non-native English speakers. Do not use proverbs and idioms. Use simple words and direct sentences. Also avoid using a lot of adjectives. Keep it at a grade 5-8 readability level.

      //   ## Cover Letter Structure (PITCH-LEAD-REASON-MEET-BOOST)

      //   1. Personalize Greeting
      //   - Begin with a greeting and, if available, the client's name.

      //   2. Introduce a Loom Video (PITCH)
      //   - If the loom video link is recorded by Me (Hassan), mentione the link

      //   3. Tackle the pain points (LEAD)
      //   - L - Lead with the issues: Identify and address the main problems or challenges mentioned in the job post.
      //   - E - Emphasize the pain point: Explain why these issues are significant for the client's business.
      //   - A - Authenticate by showing proof: Briefly mention your experience with similar issues.
      //   - D - Direct towards the CTA (REASON): Transition to how you can help solve these problems.

      //   4. Demonstrate understanding and propose solution (REASON)
      //   - R - Review the Website Structure
      //   - E - Explore Site Functionality
      //   - A - Access Existing Data
      //   - S - Specific Goals Understanding
      //   - O - Optimize Based on Current Traffic
      //   - N - Narrow Down Technical Details

      //   5. Call to Action (MEET)
      //   - M - Motivate (Call to action)
      //   - E - Engage (Propose next steps)
      //   - E - Excite (About potential collaboration)
      //   - T - Thank (Express appreciation)

      //   6. Hook with P.S. Section (BOOST)
      //   - B - Brief Thank You
      //   - O - Offer a Link to Proof
      //   - O - Open the Door for Further Communication
      //   - S - Show Value with Past Job Example
      //   - T - Time for a Call (Remind them to respond or schedule a time)

      //   ## Guidelines

      //   - Keep the total word count under 150 words (excluding links).
      //   - Focus on the client's objectives, using phrases like "Your" and "You". Avoid using "I", "Me", or "We". Keep it Client focused instead of Me focused.
      //   - Personalize the letter for the client's pain points and the specific job post.
      //   - In the PS section, include a full URL to relevant portfolio pieces only if applicable.

      //   ## Portfolio Links

      //   Klaviyo Email Marketing Automation for E-commerce Growth
      //   Client Name: Michelle Bourke
      //   Company: Foresight Digital
      //   Link to the Project: https://bit.ly/3P7T9UE

      //   Cookie Consent Management Tracking (TrustArc, OneTrust, CookiePro)
      //   Client Name: Lauren Pollard
      //   Company: CCX
      //   Link to the Project: https://bit.ly/49QPHWq

      //   TikTok Pixel and Event API (Server Side Tracking)
      //   Client Name: Jamie Norsa
      //   Website HealthTnoic
      //   Link to the Project: https://bit.ly/4a2isPN

      //   Facebook Pixel and Conversion API (Server Side Tracking)
      //   Client Name: Adam Higson
      //   Website: Reality Manifestation
      //   Link to the Project: https://bit.ly/49FFXP9

      //   Google Ads Conversion Tracking (Ecommerce, Lead Generation and More)
      //   Client Name: Josh Lyons
      //   Website: MrCarLoanSwinnipeg
      //   Link to the Project: https://bit.ly/49DktCx

      //   Google Analytics 4 using GTM and Gtag (Ecommerce, Lead & More)
      //   Client Name: Peter Selekar
      //   Website: HolidayParking
      //   Link to the Project: https://bit.ly/4bZSpL9

      //   Google Looker Studio Dashboards and Reports (Ecommerce, Leads & More)
      //   Client Name: Philipp Herglotz
      //   Website: DeHama Ecommerce Store
      //   Link to the Project: https://bit.ly/49RyfBi

      //   Zapier Integration and Analytics (Ecommerce, Leads & More)
      //   Client Name: Daniel Reese
      //   Website: [Keyesg.com](http://keyesg.com/)
      //   Link to the Project: https://bit.ly/4c635Yv

      //   Hyros Analytics Implementation (Ga4, FB, Gads & More)
      //   Client Name: Nick Ahrens
      //   Website: Wealth Builders Institute
      //   Link to the Project: https://bit.ly/3IrqcPC

      //   Remember to tailor the content to the specific job posting and client needs while maintaining a concise, friendly, and professional tone throughout the letter.`,
      system: `Write a cover letter for Hassan applying to a job. The tone should be conversation, simple to read and understand, direct. Do not use complicated vocabulary. Use simple sentences and avoid passive voice. Do not use sales/marketing pitch of tone. Avoid cringe words that sounds professional such as "keen eye", "deep dive" etc. Use sentences and words that are used by most non-native English people. Do not use proverb and idioms. Use simple words and direct sentences. Also avoid using a lot of adjectives.  Keep it grade 5 readable, its very important to use simple sentences. Ensure the following structure and guidelines are strictly followed:

      [Cover Letter Instructions Starts here]

      Begin with a greeting and, if available, the client's name.

      If link of a loom video is provided, include a [loom.com](http://loom.com/) video link right after the greeting. this video is for client to see and have a better understanding and more personal connection.

      Focus on the client’s objectives, using phrases like "Your", “You”, Avoid using "I", "Me", or "We". Keep is Client focused instead of Me focused.

      Keep the word count under 100 words.

      Personalize the letter for the client pain points and the specific job post.

      In a PS section, include a full URL to relevant portfolio pieces only if applicable.

      The cover letter basically have seven different sections the opening is greeting, then there is the main important paragraph which is discussing the pain point of the client and possible solutions and asking some questions about the relevant job the third paragraph is about building authority and talking about the freelancer itself the 4th paragraph is call to action which is basically just one sentence the 5th is the closing signature which is just one word the name of the freelancer and then the last section is PS where we are asking the client to review one of the portfolio items.

      [Cover Letter Instructions ends here]

      [Pricing Breakdown Instructions Starts here]

      After the cover letter, provide a separate section with a detailed pricing breakdown for the services offered.

      Mention the total cost and then break down the costs by major tasks or milestones.

      [Cover Letter Template Starts here]
      Hi, [if the Name of the client is mentioned, insert, else don't do anything]

      [If the [loom.com](http://loom.com/) video link has been provided by the user, add the link here: Here is a short loom video that i have recorded for you: loom link]

      [Mention the issues with the client's job and why its important to them - discussing the pain point to show that we know why the job is important to the client] [provide the solution or the workflow (to-dos) on how we will do the project or possible outline of the project if there are enough details in the Job post]. 

      Do you need a [Title of the Job Post] expert? [Ask for the Website link, if the link is not provided or ask 1 short and very critical questions that are necessary to know before starting the Job related to tracking setup in the Job Post]

      💌 Hassan

      P.s. Thank You [if the Name of the client is mentioned, insert, else don't do anything], for reading my cover letter. Be sure to check out my profile, one of our 5-Star reviews is from [If you can find a relevant Portfolio item to the Job then Get the name from the relevant Porfilio/Project list ], where we have completed a [Title of the Job Post] job very similar to yours [ If you can find a relevant Portfolio item to the Job then Paste the link from the relevant Porfilio/Project list. Add full link, do not add the text and then hyperlink].
      [Cover Letter Template Ends here]


      [Links to add in the Portfolio Start here]

      Klaviyo Email Marketing Automation for E-commerce Growth
      Client Name: Michelle Bourke
      Company: Foresight Digital
      Link to the Project: https://bit.ly/3P7T9UE

      Cookie Consent Management Tracking (TrustArc, OneTrust, CookiePro)
      Client Name: Lauren Pollard
      Company: CCX
      Link to the Project: https://bit.ly/49QPHWq

      TikTok Pixel and Event API (Server Side Tracking)
      Client Name: Jamie Norsa
      Website HealthTnoic
      Link to the Project: https://bit.ly/4a2isPN

      Facebook Pixel and Conversion API (Server Side Tracking)
      Client Name: Adam Higson
      Website: Reality Manifestation
      Link to the Project: https://bit.ly/49FFXP9

      Google Ads Conversion Tracking (Ecommerce, Lead Generation and More)
      Client Name: Josh Lyons
      Website: MrCarLoanSwinnipeg
      Link to the Project: https://bit.ly/49DktCx

      Google Analytics 4 using GTM and Gtag (Ecommerce, Lead & More)
      Client Name: Peter Selekar
      Website: HolidayParking
      Link to the Project: https://bit.ly/4bZSpL9

      Google Looker Studio Dashboards and Reports (Ecommerce, Leads & More)
      Client Name: Philipp Herglotz
      Website: DeHama Ecommerce Store
      Link to the Project: https://bit.ly/49RyfBi

      Zapier Integration and Analytics (Ecommerce, Leads & More)
      Client Name: Daniel Reese
      Website: [Keyesg.com](http://keyesg.com/)
      Link to the Project: https://bit.ly/4c635Yv

      Hyros Analytics Implementation (Ga4, FB, Gads & More)
      Client Name: Nick Ahrens
      Website: Wealth Builders Institute
      Link to the Project: https://bit.ly/3IrqcPC
      
      [Links to add in the Portfolio Ends here]
      `,
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
