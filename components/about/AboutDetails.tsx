import LearnMore from "@/components/global/LearnMore";

export default function AboutDetails() {
 return (
  <div className='divide-y p-4 container-secondary'>
   <LearnMore
    detailsList={[
     {
      icon: "📚",
      header: "Top Rated Web Analytics Expert",
      details:
       "With 100% Job Success, We specialize in web analytics, providing expertise in tools like GA4, Snapchat, Gads, FB Pixel, and CAPI server-side tracking, and have worked with renowned clients like BookOnline.com and TruelyBeauty.com",
     },
     {
      icon: "🌎",
      header: "Global Impact",
      details:
       "Our work has not only spanned 263 diverse clients but has also been featured in substantial corporations, enabling me to navigate and understand varied industry landscapes and cultural nuances in business.",
     },
     {
      icon: "🔧",
      header: "263 Total Jobs Completed",
      details:
       "Successfully completed a spectrum of 263 jobs, delving into diverse challenges in web analytics and tracking setups, always dedicated to delivering value and tangible solutions to clients across various industries.",
     },
     {
      icon: "⌚",
      header: "559 Total Hours Worked",
      details:
       "With over 559 hours worked closely with clients, ensuring their web analytics are set up correctly, data is accurate, and strategic insights can be derived from their data, thereby guiding informed business decisions.",
     },
    ]}
   />
  </div>
 );
}
