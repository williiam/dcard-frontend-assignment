import { useState, useCallback } from "react";

// External libraries
import moment from "moment";

function useRepoFilter(query) {
  const [filter, setFilter] = useState({
    repoSearchTerm: "",
    orderBy: "LAST_PUSH_TIME_DESC",
  });

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  //repos篩選結果產生器
  const getFilterRepos = useCallback(
    (repos) => {

      //排序
      if (filter.orderBy === "STAR") {
        repos = repos.sort((a, b) => a.stargazers_count - b.stargazers_count);
      } else if (filter.orderBy === "STAR_DESC") {
        repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      } else if (filter.orderBy === "LAST_PUSH_TIME") {
        repos = repos.sort((a, b) => {
          let aTime = moment(a.pushed_at);
          let bTime = moment(b.pushed_at);
          return aTime.diff(bTime);
        });
      } else if (filter.orderBy === "LAST_PUSH_TIME_DESC") {
        repos = repos.sort((a, b) => {
          let aTime = moment(a.pushed_at);
          let bTime = moment(b.pushed_at);
          return bTime.diff(aTime);
        });
      }

      //搜尋字串篩選
      if (filter.repoSearchTerm !== "") {
        repos = repos.filter((filteredRepo) =>
          filteredRepo.name
            .toLowerCase()
            .includes(filter.repoSearchTerm.toLowerCase())
        );
      }
      return repos;
    },
    [filter]
  );

  return { filter, handleFilterChange,getFilterRepos };
}

export default useRepoFilter;
