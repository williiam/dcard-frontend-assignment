// External libraries
import moment from "moment";

function RepoCard({repoData}) {

  if(repoData === undefined) {
    return(
      <></>
    ) 
  }
  
  return (
    <div className="flex flex-col w-full max-w-xl mt-8 mx-auto items-center space-y-4 bg-amber-400 rounded-xl border-black border-4">
      <div className="flex flex-row justify-center w-full mt-4">
        <a href={repoData?.html_url} target="_blank">
          <h2 className="text-2xl font-sans subpixel-antialiased font-medium tracking-wide leading-9  underline text-blue-800">
            {repoData?.full_name}
          </h2>
        </a>
      </div>
      <div className="flex flex-row justify-around  w-full">
        <div className="text-start mx-10">{repoData?.description}</div>
      </div>
      <div className="flex flex-row justify-around w-full">
        <div className="flex flex-row justify-around w-full">
          <a href={repoData?.html_url} target="_blank">
            <h2 className="text-xl font-sans subpixel-antialiased font-normal hover:font-bold">
              {repoData?.visibility}
            </h2>
          </a>
          <h2 className="ml-3 text-xl">
            {" "}
            {`${repoData?.language !== null && repoData?.language}`}
          </h2>
          <h2 className="ml-3 text-xl"> {`⭐${repoData?.stargazers_count}`}</h2>
          <h2 className="ml-3 text-xl">
            {" "}
            {moment(repoData?.pushed_at).startOf("day").fromNow()}
          </h2>
        </div>
        <div></div>
      </div>
      <br></br>
    </div>
  );
}

export default RepoCard;
