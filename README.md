### 頁面展示: 
<https://oz841119.github.io/focus-muscle/>  

##### 後台管理系統(Github): 
<https://github.com/oz841119/focus-muscle-admin>


# FocusMuscle
基於Vue2的SPA，主要用於查看某肌群的鍛鍊方式  
以Firebase作為數據庫  
使用原生AJAX對Firebase RESTful API請求及提交數據  
而非Firebase提供的方法(後台管理系統使用Firebase Web API)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### 版本更新
##### v0.4
1. 簡易後台管理系統完成
2. MuscleBox開啟後 點擊非Box內容可以關閉Box
3. 點擊頂部Bar以及其子組件時不會關閉MuscleBox
4. 新增一些註釋

##### v0.3
1. 新增icon
2. box底色變更
3. 更改字體
4. 訓練動作由本地JSON靜態文件改為網路請求Firebase RESTful Api
5. 意見功能實裝: 網路請求Firebase RESTful Api

##### v0.2
1. 新增按讚功能 操作localStorage

### 預計更新
1. Mobile drive上圖片排版預計為上下排列而非左右(須更新SVG)
2. ~~目前採用靜態JSON文件傳入內容，預計改為Firebase進行數據請求~~
3. ~~為動作名稱添加Google search or Youtube search link~~
4. ~~提供意見功能實作~~ (v0.3已新增)
4. 意見功能限制提交次數 防止不斷提交
5. ~~開發後台頁面審核意見內容並添加到內容中~~
6. ~~新增功能實踐操作用戶cookies~~ (v0.2已新增 採用localStorage)
7. 視覺及排版整體更新
8. 新增icon
9. 讀取數據時進行loading動畫

### 已知問題
1. SVG的Path未對肌群部位具有正確性
2. 整體內容的不正確性
