
const ToolBox = ({filter,handleFilterChange}) => {
    const options = [
      {
        name: "orderBy",
        value: "DEFAULT",
        display: "預設",
      },
      {
        name: "orderBy",
        value: "STAR",
        display: "星星數少到多",
      },
      {
        name: "orderBy",
        value: "STAR_DESC",
        display: "星星數多到少",
      },
      {
        name: "orderBy",
        value: "LAST_PUSH_TIME",
        display: "上次推送時間(舊到新)",
      },
      {
        name: "orderBy",
        value: "LAST_PUSH_TIME_DESC",
        display: "上次推送時間(新到舊)",
      },
    ];

    return (
      <div className="flex flex-col items-center w-full space-y-4 ">
        <div className="flex flex-row justify-between w-full  max-w-2xl">
          <div className="">
            <form className="w-full max-w-sm">
              <label className="font-sans subpixel-antialiased hover:font-bold text-stone-100 focus:outline-none focus:shadow-outline">
                搜尋repo
              </label>
              <div className="flex items-center border-b border-teal-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="repoSearchTerm"
                  value={filter.repoSearchTerm}
                  onChange={handleFilterChange}
                  placeholder="repo name"
                  aria-label="Full name"
                />
              </div>
            </form>
          </div>
          <div className="">
            <label className="font-sans subpixel-antialiased hover:font-bold text-stone-100 focus:outline-none focus:shadow-outline">
              排序方式
            </label>
            <select
              className="
          form-select block max-w-48 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out ml-4 mt-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              name="orderBy"
              value={filter.orderBy}
              onChange={handleFilterChange}
            >
              {options.map((item) => {
                return (
                  <option name={item.name} value={item.value}>
                    {item.display}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    );
  };

  export default ToolBox;