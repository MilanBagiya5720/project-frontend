import React from "react";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import SectionHeader from "../components/SectionHeader";
import { movies } from "../data/movies";

const Home: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      title: "Unlimited Movies, TV Shows, and More",
      subtitle: "Watch anywhere. Cancel anytime.",
      imageUrl: movie1,
      cta: "Start Your Free Trial",
    },
    {
      id: 2,
      title: "Download Your Shows to Watch Offline",
      subtitle:
        "Save your favorites easily and always have something to watch.",
      imageUrl: movie2,
      cta: "Learn More",
    },
    {
      id: 3,
      title: "Watch Everywhere",
      subtitle: "Stream on your phone, tablet, laptop, and TV.",
      imageUrl: movie3,
      cta: "See Devices",
    },
    {
      id: 4,
      title: "4K Ultra HD Quality",
      subtitle: "Experience cinema-quality visuals at home.",
      imageUrl: movie4,
      cta: "Upgrade Now",
    },
    {
      id: 5,
      title: "Family Friendly",
      subtitle: "Create profiles for kids with parental controls.",
      imageUrl: movie5,
      cta: "Set Up Profiles",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1c] via-[#15151f] to-[#0f0f1c] text-white">
      {/* Hero Carousel */}
      <Carousel slides={heroSlides} />

      {/* Main Content */}
      <div className="px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16">
        {/* Popular Movies Section */}
        <section className="mb-20">
          <SectionHeader title="Popular Movies" />
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.slice(0, 10).map((movie, index) => (
              <MovieCard key={movie.imdbid} movie={movie} index={index} />
            ))}
          </div>
        </section>

        {/* Trending Now Section */}
        <section className="mb-20">
          <SectionHeader title="Trending Now" />
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.slice(10, 20).map((movie, index) => (
              <MovieCard key={movie.imdbid} movie={movie} index={index} />
            ))}
          </div>
        </section>

        {/* New Releases Section */}
        <section>
          <SectionHeader title="New Releases" />
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.slice(20, 30).map((movie, index) => (
              <MovieCard key={movie.imdbid} movie={movie} index={index} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
