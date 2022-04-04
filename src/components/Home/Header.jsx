import { Link } from "react-router-dom";

const Header = ({username}) => {
    return (
      <div className="flex flex-col items-center w-full space-y-4 ">
        <Link
          to={`/users/${username}/repos`}
          className="flex flex-col items-center mt-4 mb-4"
        >
          <h1 className="text-4xl font-sans subpixel-antialiased font-normal font-bold text-amber-400 underline">
            {username}
          </h1>
          <span className="text-2xl ml-0 pl-0 l-0 text-amber-400">的repos</span>
        </Link>
      </div>
    );
  };

  export default Header;