import YoutubeEmbed from "@/components/global/youtube-embed";
import WheelOfLife from "@/components/tools/wheel-of-life/WheelOfLife";
import Text from "@/components/ui/text";
import type { NextPage } from "next";
import Head from "next/head";

const page: NextPage = () => {
  return (
    <div className="container-primary">
      <main className="items-left flex min-h-screen flex-col justify-center py-2">
        <h1 className="pt-12 text-center text-3xl font-bold">
          Wheel of Life by Ali Abdaal
        </h1>
        <p className="py-4 text-center">
          Reflection is a powerful tool for personal growth and self-awareness.
          One method that has gained popularity for its simplicity and
          effectiveness is the "Wheel of Life". It allows individuals to divide
          their life into key areas and rate their current level of satisfaction
          or alignment in each. This blog post introduces an interactive "Wheel
          of Life" component that you can integrate into your web applications
          to help users perform this exercise digitally.
        </p>
        <YoutubeEmbed embedId="c_DOG_mXz5w" />

        <WheelOfLife />

        <h3 className="pb-6 text-2xl font-bold">What is the Wheel of Life?</h3>

        <p className=" ">
          The Wheel of Life is a circular diagram that represents various life
          aspects, such as health, relationships, and work. Each section is
          rated on a scale from 0 to 10, indicating how satisfied or aligned one
          feels in that area. The goal is to identify areas that are thriving
          and others that may require more attention.
        </p>
        <h3 className="py-6 text-2xl font-bold">How to Use the Component: </h3>

        <p className=" ">
          To use the "Wheel of Life" component, follow these simple steps:
        </p>
        <Text as="ol">
          <Text as="li">Rate Each Life Area:</Text>
          <Text as="ul">
            <Text as="li">
              Reflect on each aspect of your life, namely Body, Mind, Soul,
              Romance, Family, Friends, Mission, Money, and Growth.
            </Text>
            <Text as="li">
              Use the slider to rate each area on a scale from 0 (least
              satisfied) to 10 (most satisfied).
            </Text>
          </Text>
          <Text as="li">View Your Life Balance:</Text>
          <Text as="ul">
            <Text as="li">
              Once you have rated each area, the radar chart will update to
              reflect your scores.
            </Text>
            <Text as="li">
              The visual representation allows you to quickly assess which areas
              are balanced and which are not.
            </Text>
          </Text>
          <Text as="li">Identify Areas for Improvement:</Text>
          <Text as="ul">
            <Text as="li">
              Look for sections that have lower scores, as these are the areas
              where you might want to focus your improvement efforts.
            </Text>
          </Text>
          <Text as="li"> Set Goals:</Text>
          <Text as="ul">
            <Text as="li">
              With a clear view of where you stand, set actionable goals for the
              areas you want to improve.
            </Text>
          </Text>
        </Text>

        <h3 className="py-6 text-2xl font-bold">Conclusion: </h3>
        <p className=" ">
          The "Wheel of Life" is more than just a tool for reflection — it's a
          starting point for making tangible changes in your life. By
          transforming this exercise into an interactive experience, we make it
          easier for users to engage with the process and track their progress
          over time.
        </p>
      </main>
    </div>
  );
};

export default page;
