<<<<<<< HEAD
# Allen Chou academic website

這是一個可由 GitHub Pages 免費託管的 Jekyll 學術個人網站。首頁依照提供的參考頁面重建，所有畫面中的 `Alvin Zhu` 已先改為 `Allen Chou`。

> 注意：目前的經歷、論文、社群連結、信箱、CV 與影片仍是參考站內容。正式公開前，請務必換成你自己的資料，以免造成身分或研究成果誤認。搜尋 `alvinzhu`、`alvister88` 與 `Allen Chou` 可快速找到需修改處。

## 最快上線方式（本專案）

1. 在 GitHub 建立帳號，並完成 Email 驗證。
2. 建立一個 **Public** repository，名稱必須是 `你的帳號.github.io`。例如帳號為 `allenchou`，repo 就叫 `allenchou.github.io`。
3. 修改 `_config.yml`：
   - `url: "https://你的帳號.github.io"`
   - `repository: "你的帳號/你的帳號.github.io"`
4. 在本資料夾開啟 PowerShell，執行：

   ```powershell
   git init
   git add .
   git commit -m "Create academic website"
   git branch -M main
   git remote add origin https://github.com/你的帳號/你的帳號.github.io.git
   git push -u origin main
   ```

5. 到 GitHub repository 的 `Settings` → `Pages`，在 **Build and deployment / Source** 選 `GitHub Actions`。
6. 到 `Actions` 分頁等待綠色勾勾。完成後網址就是 `https://你的帳號.github.io/`。

本專案附帶 `.github/workflows/pages.yml`，每次 push 到 `main` 都會自動用 Jekyll 建置並發布。

## 與 AcademicPages 搭配

AcademicPages 本身就是以 Jekyll 製作、專門給學術履歷使用的 GitHub Pages 範本。若你之後想使用它的 publications、talks、teaching、CV collections，建議這樣做：

1. 前往 `https://github.com/academicpages/academicpages.github.io`。
2. 按 `Use this template` → `Create a new repository`。
3. Repository 名稱填 `你的帳號.github.io`，並設為 Public。
4. 在 AcademicPages repo 中設定 `_config.yml` 的姓名、網址、repository、社群帳號。
5. 把本專案的下列檔案複製進 fork 後的 repo：
   - `index.html`
   - `assets/css/main.css`
   - `assets/js/main.js`
6. 保留 AcademicPages 原有的 collections（例如 `_publications`、`_talks`）與其他模板檔。若 GitHub 提示同名檔案，首頁三個檔案以本專案版本為準。
7. 在 `Settings` → `Pages` 確認部署來源。AcademicPages 新版通常已附 Actions；若沒有，就使用本專案的 `.github/workflows/pages.yml`。

這樣首頁外觀維持目前版本，同時仍可逐步採用 AcademicPages 的學術內容管理方式。

## 本機預覽

先安裝 Ruby（Windows 建議 RubyInstaller，安裝時包含 MSYS2），再執行：

```powershell
gem install bundler
bundle install
bundle exec jekyll serve
```

瀏覽器開啟 `http://127.0.0.1:4000`。修改檔案後通常會自動重新建置。

## 最常修改的檔案

- `index.html`：姓名、簡介、更新、論文、專案、連結。
- `assets/css/main.css`：顏色、間距、卡片、手機版版面。
- `assets/js/main.js`：捲動淡入與肖像載入效果。
- `_config.yml`：網站標題、網址、repository 與 Jekyll 設定。

## 圖片與影片改成本地檔案

目前肖像與影片使用參考站的絕對網址。正式發布時建議把你自己的資源放進：

```text
assets/images/portrait.jpg
assets/videos/your-project.mp4
```

然後在 `index.html` 改為：

```html
<img src="{{ '/assets/images/portrait.jpg' | relative_url }}" alt="Portrait of Allen Chou">
```

影片檔通常很大；若超過 GitHub 的檔案限制，建議改放 YouTube、Vimeo 或物件儲存服務，再嵌入頁面。

=======
# Allenchou0708.github.io
This is my website
>>>>>>> 325dac7e432aa5df99a4a2dba6c725349c913fdc
