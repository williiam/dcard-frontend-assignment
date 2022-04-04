import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function RepoItem({ repo, userName }) {
  return (
    <div className="flex flex-row w-full h-24 justify-start space-y-8 px-4 py-2 rounded-md border-2 border-inherit-500 shadow-lg bg-amber-300 text-teal-900 rounded-xl border-black border-4">
      <div className="basis-3/4 flex flex-col justify-between items-center">
        <div className="flex flex-row justify-start items-center w-full">
          <div className="break-all">
            <Link
              to={`/users/${userName}/repos/${repo?.name}`}
              className="text-2xl font-sans subpixel-antialiased font-normal hover:font-bold underline"
            >
              {repo?.name}
            </Link>
            <span></span>
          </div>

        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row justify-start w-full">
          <div className=" break-all rounded-md border-2 border-slate-500 px-1 py-0">
          <h2 className="font-sans subpixel-antialiased ">
              {repo?.visibility}
            </h2>
        </div>
            <h2 className="ml-3">{repo?.language}</h2>
            <h2 className="ml-3">⭐ {repo?.stargazers_count}</h2>
          </div>
        </div>
      </div>
      <div className="basis-1/4 flex flex-col "></div>
      <div className="basis-1/4 flex flex-col ">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="">
            <h2>{moment(repo?.pushed_at).startOf("day").fromNow()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
