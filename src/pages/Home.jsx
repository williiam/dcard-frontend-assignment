// Hooks and Function
import React, { useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import useRepoSearch from "../hooks/useRepoSearch";
import useRepoFilter from "../hooks/useRepoFilter";


// Main Components
import Header from "../components/Home/Header"
import ToolBox from "../components/Home/ToolBox"
import RepoItem from "../components/Home/RepoItem";

export default function App() {
  const params = useParams();
  const username = params.username;
  const [query, setQuery] = useState({ userName: username });
  const [pageNumber, setPageNumber] = useState(1);

  const { repos, hasMore, loading, error } = useRepoSearch(query, pageNumber);
  const { filter, handleFilterChange ,getFilterRepos} = useRepoFilter();

  console.log("{ repos, hasMore, loading, error }", {
    repos,
    hasMore,
    loading,
    error,
  });

  const observer = useRef();

  const lastrepoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (error) {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col mt-8 items-center w-full space-y-4 ">
          <h1 className="text-4xl font-sans  subpixel-antialiased font-normal font-bold text-red-400">
            Error
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center w-full space-y-4 ">
        <Header username={username}/>
        <ToolBox filter={filter} handleFilterChange={handleFilterChange}/>
        <div className="self-center flex flex-col justify-between space-y-3 w-full max-w-2xl">
          {getFilterRepos(repos).map((repo, index) => {
            if (repos.length === index + 1) {
              return (
                <div ref={lastrepoElementRef} key={index}>
                  <RepoItem repo={repo} userName={query.userName} />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <RepoItem repo={repo} userName={query.userName} />
                </div>
              );
            }
          })}
        </div>
        <div>
            {loading && (
              <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400">
                Loading...
              </h1>
            )}
          </div>
      </div>
    </div>
  );
}
