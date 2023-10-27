import LearnMore from "../global/LearnMore";

export default function AboutDetails() {
 return (
  <div className='divide-y p-4'>
   <LearnMore
    detailsList={[
     {
      icon: "📚",
      header: "Top Rated Web Analytics Expert",
      details:
       "With 98% Job Success on Upwork, I specialize in web analytics, providing expertise in tools like GA4, UA, FB Pixel, and CAPI server-side tracking, and have worked with renowned clients like BookOnline.com and TruelyBeauty.com.",
     },
     {
      icon: "🌎",
      header: "Global Impact",
      details:
       "My work has not only spanned 230 diverse clients but has also been featured in substantial corporations, enabling me to navigate and understand varied industry landscapes and cultural nuances in business.",
     },
     {
      icon: "🔧",
      header: "251 Total Jobs Completed",
      details:
       "Successfully completed a spectrum of 251 jobs, delving into diverse challenges in web analytics and tracking setups, always dedicated to delivering value and tangible solutions to clients across various industries.",
     },
     {
      icon: "⌚",
      header: "523 Total Hours Worked",
      details:
       "Invested 523 hours working closely with clients, ensuring their web analytics are set up correctly, data is accurate, and strategic insights can be derived from their data, thereby guiding informed business decisions.",
     },
    ]}
   />
  </div>
 );
}
