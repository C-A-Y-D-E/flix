import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import CategoryItem from "components/shared/Categoryitem";
import EpisodesList from "components/EpisodesList";
import Layout from "components/shared/Layout";
const AnimeDetail = () => {
  return (
    <Layout>
      <div
        style={{
          background: 'url("/back.jpg") center top / cover no-repeat',
          zIndex: "-1",
        }}
        className="absolute inset-x-0 top-20 h-[500px] backround-image"
      ></div>

      <div className="container pt-36 z-10">
        <div className="flex gap-4 items-center mb-6">
          <MdPlayCircleOutline className="h-16 w-16 font-thin stroke-0" />
          <span className="text-lg">Trailer</span>
        </div>
        <div className="lg:w-[66.66%] ">
          <div>
            <h1 className="text-4xl mb-4 font-heading">
              The Fast and the Furious
            </h1>
            <ul className="flex gap-6 list-disc text-gray-200 mb-6">
              <li className="list-none">Action</li>
              <li>Comedy</li>
              <li>2021</li>
            </ul>
            <p className="text-gray-200">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>

          <div className="space-y-2 mt-8">
            <h4 className="font-heading text-lg ">Genres</h4>
            <ul className="flex gap-6 text-sm text-gray-200 mb-6">
              <CategoryItem text="Action" />
              <CategoryItem text="Action" />
              <CategoryItem text="Action" />
            </ul>
          </div>
        </div>

        <div className="space-y-2 mt-8">
          <EpisodesList />
        </div>
      </div>
    </Layout>
  );
};

export default AnimeDetail;
