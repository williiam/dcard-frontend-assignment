// Hooks and Function
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// External libraries
import axios from "axios";

// Main Components
import RepoCard from "../components/Repo/RepoCard";

function Repo() {
  const params = useParams();
  const username = params.username;
  const reponame = params.reponame;

  const getRepo = useCallback(async () => {
    const res = await axios.get(
      `https://api.github.com/repos/${username}/${reponame}`
    );
    return res.data;
  }, []);

  const { loading, error, data } = useFetch(getRepo);

  const Layout = (children) => {
    return (
      <div className="container mx-auto">
        <header>
          <Link to="/" className="flex flex-col items-center mt-4 mb-4 ">
            <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400">
              {username}
            </h1>
          </Link>
        </header>
        <div>
          <div className="flex flex-col w-full max-w-xl mx-auto items-center space-y-4">
            {children}
          </div>
        </div>
      </div>
    );
  };

  if (loading && !data) {
    return Layout(
      <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400">
        Loading...
      </h1>
    );
  }

  if (loading) {
    return Layout(
      <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400">
        裝載資料中...
      </h1>
    );
  }

  if (error) {
    return Layout(
      <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-red-400">
        Error
      </h1>
    );
  }

  return Layout(<RepoCard repoData={data} />);
}

export default Repo;
