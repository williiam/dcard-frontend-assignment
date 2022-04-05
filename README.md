## DCARD 2022 front-end-intern assignment
#### DEMO:

https://dacrd-frontend-assignment.herokuapp.com/

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm run dev`  

To Visit App:

`localhost:3000/ideas`  

## 架構設計說明

此專案共有2個頁面

### repository列表
- url路徑: "/users/{username}/repos"
- 此頁面會用到components:
 
    - Header:
        
        - 檔案路徑： "/components/Home/Header"
        - 負責： 顯示目前使用者名稱

    - ToolBox:
    
        - 檔案路徑： "/components/Home/ToolBox"
        - 負責： repo搜尋字串輸入欄 repo排序選擇器

- 此頁面會用到custom hooks
 
    - useRepoSearch:

        - 作用：
            - 在pageNumber更新後,ajax更新repositories
        - input:
            - query: ajax url 端點
            - pageNumber: 目前資料頁數

        - output: 
            - loading
            - error
            - repos

    useRepoFilter:
    - 作用： 取得一個能夠篩選repo陣列的篩選器 
    - input:
        - 無
    - output:
        - filter: 目前的過濾條件
        - handleFilterChange: 處理過濾/搜尋條件變動
        - getFilterRepo(): 給定repos陣列 回傳過濾/排序過的repos陣列

- 此頁面實做了infinite scroll，作法如下：

    - 流程1:

            先useState初始化一個repos陣列
            並藉由useEffect在component剛載入時
            自動執行useEffect內容，也就是ajax取得10筆repos並使用.map方法render
    - 流程2:

            在repos陣列的最後一個repo的節點上掛上一個observer(使用useRef)
            此observer使用 IntersectionObserver API 觀察目前此ref是否正在Intersecting
        
    - 流程3. 

            若該node正在跟瀏覽器頁面底部Intersecting且仍有資料可取，則會將pageNumber+1
            接著，因為pageNumber這個state的值有變動，
            會觸發useRepoSearch裡的useEffect
            此useEffect則會接著執行一次ajax取下10筆repo資料並更新repos
            最後，使用.map方法顯示更新後的repos
        
        達成每次頁面滾動最下面就會再執行流程3,直到該使用者所有repository資料皆已取得

### 單一repository頁面
- url路徑: "/users/{username}/repos/{repo}"

- 此頁面會用到components:
    - RepoCard:
        - 負責： 以卡片外型顯示單一repo詳細資料

- 此頁面會用到custom hooks
     - useFetch:

        - 作用： 負責ajax的hooks
        - input:   
            - query: 負責ajax戳API的函式
        - output: 
            - loading
            - error
            - data(ajax取得的data)
