# Vercel 部署指南

本指南將協助您將「小隊位置搜尋系統」部署到 Vercel 平台。

## 前置準備

### 1. 建立 Vercel 帳號
- 前往 [Vercel 官網](https://vercel.com)
- 使用 GitHub、GitLab 或 Bitbucket 帳號註冊/登入

### 2. 準備 Git 儲存庫
確保您的專案已推送到 Git 儲存庫（GitHub、GitLab 或 Bitbucket）

---

## 部署方式一：透過 Vercel Dashboard（推薦）

### 步驟 1: 匯入專案

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 點擊 **"Add New..."** → **"Project"**
3. 選擇您的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 授權 Vercel 存取您的儲存庫
5. 選擇 `TeamPositionFinder` 專案
6. 點擊 **"Import"**

### 步驟 2: 配置專案

Vercel 會自動偵測到這是一個 Next.js 專案，並自動填入以下設定：

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**無需修改任何設定**，保持預設值即可。

### 步驟 3: 部署

1. 檢查設定無誤後，點擊 **"Deploy"**
2. 等待建置完成（約 1-2 分鐘）
3. 部署成功後，您會看到：
   - 🎉 恭喜訊息
   - 專案預覽圖
   - 部署網址（例如：`https://team-position-finder-xxx.vercel.app`）

### 步驟 4: 訪問網站

點擊提供的網址，即可訪問您的小隊位置搜尋系統！

---

## 部署方式二：使用 Vercel CLI

### 步驟 1: 安裝 Vercel CLI

```bash
npm install -g vercel
```

### 步驟 2: 登入 Vercel

```bash
vercel login
```

選擇您的登入方式（Email、GitHub、GitLab 等）

### 步驟 3: 部署專案

在專案根目錄執行：

```bash
cd /Users/jo/TeamPositionFinder
vercel
```

### 步驟 4: 回答設定問題

```
? Set up and deploy "~/TeamPositionFinder"? [Y/n] Y
? Which scope do you want to deploy to? [選擇您的帳號]
? Link to existing project? [N/y] N
? What's your project's name? team-position-finder
? In which directory is your code located? ./
```

Vercel 會自動偵測 Next.js 並開始部署。

### 步驟 5: 部署完成

部署成功後，終端機會顯示：

```
✅  Production: https://team-position-finder-xxx.vercel.app [copied to clipboard]
```

---

## 部署方式三：使用 Git 自動部署（推薦用於持續部署）

### 設定自動部署

1. 完成「方式一」的初次部署
2. 之後每次推送到 Git 儲存庫時，Vercel 會自動：
   - 偵測新的提交
   - 自動建置
   - 自動部署

### 分支部署策略

- **main/master 分支**: 自動部署到生產環境
- **其他分支**: 自動建立預覽部署（Preview Deployment）

---

## 自訂域名設定

### 步驟 1: 進入專案設定

1. 在 Vercel Dashboard 選擇您的專案
2. 點擊 **"Settings"** 標籤
3. 選擇 **"Domains"**

### 步驟 2: 新增域名

1. 輸入您的域名（例如：`team-finder.example.com`）
2. 點擊 **"Add"**

### 步驟 3: 配置 DNS

根據 Vercel 提供的指示，在您的域名服務商設定 DNS：

**A 記錄方式**:
```
Type: A
Name: @ (或您的子域名)
Value: 76.76.21.21
```

**CNAME 方式**:
```
Type: CNAME
Name: www (或您的子域名)
Value: cname.vercel-dns.com
```

### 步驟 4: 等待 DNS 生效

DNS 變更通常需要 24-48 小時生效，但通常幾分鐘內就能完成。

---

## 環境變數設定（如需要）

如果您的應用程式需要環境變數：

### 步驟 1: 進入環境變數設定

1. 在 Vercel Dashboard 選擇專案
2. 點擊 **"Settings"** → **"Environment Variables"**

### 步驟 2: 新增變數

```
Name: NEXT_PUBLIC_API_URL
Value: https://api.example.com
Environment: Production, Preview, Development
```

### 步驟 3: 重新部署

新增環境變數後，需要重新部署才會生效。

---

## 更新小隊資料

### 方法一：透過 Git（推薦）

1. 編輯 `data/teams.json`
2. 提交變更：
   ```bash
   git add data/teams.json
   git commit -m "更新小隊資料"
   git push
   ```
3. Vercel 會自動偵測並重新部署

### 方法二：手動重新部署

1. 在 Vercel Dashboard 選擇專案
2. 點擊 **"Deployments"** 標籤
3. 點擊最新部署旁的 **"..."** → **"Redeploy"**

---

## 效能優化建議

### 1. 啟用 Edge Network

Vercel 預設會使用全球 CDN，無需額外設定。

### 2. 圖片優化

如果未來新增圖片，使用 Next.js Image 組件：

```tsx
import Image from 'next/image'

<Image 
  src="/team-photo.jpg" 
  width={500} 
  height={300} 
  alt="小隊照片"
/>
```

### 3. 分析效能

在 Vercel Dashboard 查看：
- **Analytics**: 訪問量統計
- **Speed Insights**: 效能指標
- **Web Vitals**: 核心網頁指標

---

## 監控與除錯

### 查看建置日誌

1. 在 Vercel Dashboard 選擇專案
2. 點擊 **"Deployments"**
3. 選擇特定部署
4. 查看 **"Building"** 和 **"Functions"** 日誌

### 常見問題排除

#### 問題 1: 建置失敗

**解決方法**:
1. 檢查 `package.json` 依賴版本
2. 確認 Node.js 版本相容（建議 18.x）
3. 查看建置日誌中的錯誤訊息

#### 問題 2: 404 錯誤

**解決方法**:
1. 確認 `app/page.tsx` 存在
2. 檢查檔案路徑大小寫
3. 清除快取並重新部署

#### 問題 3: 樣式未載入

**解決方法**:
1. 確認 `app/globals.css` 已在 `layout.tsx` 中匯入
2. 檢查 `tailwind.config.js` 配置
3. 重新建置專案

---

## 回滾到先前版本

### 步驟 1: 查看歷史部署

1. 在 Vercel Dashboard 選擇專案
2. 點擊 **"Deployments"** 標籤
3. 查看所有歷史部署

### 步驟 2: 推廣先前版本

1. 找到想要回滾的版本
2. 點擊 **"..."** → **"Promote to Production"**
3. 確認操作

---

## 安全性設定

### 1. 啟用 HTTPS

Vercel 預設為所有部署啟用 HTTPS，無需額外設定。

### 2. 設定 Headers

在 `next.config.js` 中新增安全 Headers：

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

### 3. 環境變數保護

- 永遠不要在程式碼中硬編碼敏感資訊
- 使用 Vercel 環境變數功能
- 以 `NEXT_PUBLIC_` 開頭的變數會暴露到瀏覽器

---

## 成本說明

### Hobby 方案（免費）

- ✅ 無限部署
- ✅ 自動 HTTPS
- ✅ 全球 CDN
- ✅ 100GB 頻寬/月
- ✅ 無限網站

**本專案適用免費方案**

### Pro 方案（$20/月）

如需更多功能：
- 更高頻寬限制
- 進階分析
- 密碼保護
- 團隊協作

---

## 部署檢查清單

部署前確認：

- [ ] 所有程式碼已提交到 Git
- [ ] `package.json` 依賴版本正確
- [ ] 本地測試通過（`npm run build` 成功）
- [ ] `data/teams.json` 資料正確
- [ ] README.md 已更新
- [ ] 環境變數已設定（如需要）

部署後驗證：

- [ ] 網站可正常訪問
- [ ] 搜尋功能正常運作
- [ ] 座位圖正確顯示
- [ ] 響應式設計在各裝置正常
- [ ] 效能指標良好

---

## 取得協助

### Vercel 官方資源

- 📚 [Vercel 文件](https://vercel.com/docs)
- 💬 [Vercel 社群](https://github.com/vercel/vercel/discussions)
- 🎓 [Next.js 部署指南](https://nextjs.org/docs/deployment)

### 聯絡支援

- Vercel 支援: support@vercel.com
- Next.js 支援: https://github.com/vercel/next.js/issues

---

## 快速部署指令

```bash
# 方法一：使用 Vercel CLI
npm install -g vercel
vercel login
vercel

# 方法二：使用 Git
git add .
git commit -m "Initial commit"
git push origin main
# 然後在 Vercel Dashboard 匯入專案
```

---

**祝您部署順利！** 🚀

如有任何問題，請參考上述疑難排解章節或聯絡技術支援。
