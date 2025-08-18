import Hero from "./Components/Hero";
import RecommendedStartups from "./Components/RecommendedStartups";

export default function Home() {
  return (
    <>
      <Hero
        Campaign="Pitch, Vote, and Grow"
        Title="Pitch Your Startup, Connect with Entrepreneurs"
        Description="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions"
        isInput={true}
      />
      <RecommendedStartups />
    </>
  );
}
