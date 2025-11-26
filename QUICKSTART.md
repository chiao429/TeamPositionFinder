# 🚀 快速入門指南

5 分鐘內啟動您的小隊位置搜尋系統！

## 📋 前置需求

- Node.js 18.0 或更高版本
- npm 或 yarn
- Git（用於版本控制）

---

## ⚡ 快速開始

### 1️⃣ 安裝依賴

```bash
cd /Users/jo/TeamPositionFinder
npm install
```

### 2️⃣ 啟動開發伺服器

```bash
npm run dev
```

### 3️⃣ 開啟瀏覽器

訪問 [http://localhost:3000](http://localhost:3000)

🎉 **完成！** 您的系統已經運行了！

---

## 🎯 基本使用

### 搜尋小隊

1. 在搜尋欄輸入小隊名稱（例如：「飛鷹隊」）
2. 點擊「搜尋」按鈕或按下 Enter
3. 系統會：
   - 顯示小隊資訊卡片
   - 在座位圖上高亮顯示座位位置

### 範例小隊

系統預設包含以下小隊資料：

- **飛鷹隊** - 座位 S223, S224 - 隊長：王小明
- **猛虎隊** - 座位 S225, S226 - 隊長：李大華
- **雄獅隊** - 座位 S227 - 隊長：張美玲
- **神龍隊** - 座位 S228, S229, S230 - 隊長：陳志強
- **閃電隊** - 座位 S231 - 隊長：林雅婷

---

## 📝 修改小隊資料

### 編輯資料檔案

開啟 `data/teams.json`：

```json
[
  {
    "team_name": "您的小隊名稱",
    "positions": ["S223", "S224"],
    "leader": "隊長姓名"
  }
]
```

### 新增小隊

在陣列中新增物件：

```json
{
  "team_name": "新小隊",
  "positions": ["S235", "S236"],
  "leader": "新隊長"
}
```

### 儲存並重新整理

儲存檔案後，瀏覽器會自動重新載入（熱重載功能）。

---

## 🎨 自訂座位配置

### 修改座位佈局

編輯 `components/SeatMap.tsx` 中的 `seatLayout` 陣列：

```typescript
const seatLayout: SeatPosition[][] = [
  // 第一排
  [
    { id: 'S201', row: 0, col: 0, label: 'S201' },
    { id: 'S202', row: 0, col: 1, label: 'S202' },
    // ... 更多座位
  ],
  // 第二排
  [
    { id: 'S207', row: 1, col: 0, label: 'S207' },
    // ... 更多座位
  ],
];
```

---

## 🚀 部署到 Vercel

### 方法一：使用 Vercel CLI

```bash
# 安裝 Vercel CLI
npm install -g vercel

# 登入
vercel login

# 部署
vercel
```

### 方法二：透過 GitHub

1. 將專案推送到 GitHub
2. 前往 [Vercel Dashboard](https://vercel.com/dashboard)
3. 點擊「Import Project」
4. 選擇您的 GitHub 儲存庫
5. 點擊「Deploy」

✅ **完成！** 您的網站已上線！

---

## 📚 常用指令

```bash
# 開發模式
npm run dev

# 建置生產版本
npm run build

# 啟動生產伺服器
npm start

# 程式碼檢查
npm run lint
```

---

## 🔧 常見問題

### Q: 修改資料後沒有更新？

**A**: 確認檔案已儲存，開發伺服器會自動重新載入。如果沒有，請手動重新整理瀏覽器（Cmd+R 或 Ctrl+R）。

### Q: 座位沒有高亮顯示？

**A**: 檢查 `teams.json` 中的座位編號是否與 `SeatMap.tsx` 中的座位 ID 一致。

### Q: 部署後樣式跑掉？

**A**: 確認 `tailwind.config.js` 的 `content` 路徑正確，並重新建置專案。

---

## 📖 進階文件

- [完整需求規格](docs/requirements.md)
- [UI 設計規格](docs/ui-design.md)
- [系統架構文件](docs/system-architecture.md)
- [部署指南](docs/deployment-guide.md)

---

## 💡 下一步

- ✨ 自訂主題顏色（編輯 `tailwind.config.js`）
- 🎯 新增更多小隊資料
- 🌐 部署到生產環境
- 📊 整合分析工具

---

## 🆘 需要協助？

- 📧 Email: support@example.com
- 💬 GitHub Issues: [提交問題](https://github.com/your-repo/issues)
- 📚 文件: [查看完整文件](README.md)

---

**祝您使用愉快！** 🎉
