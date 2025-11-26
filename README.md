# 小隊位置搜尋系統

一個現代化的網頁應用程式，用於快速搜尋並定位小隊在座位圖中的位置。

## 功能特色

- 🔍 **即時搜尋**：輸入小隊名稱即可快速搜尋
- 🎯 **視覺化定位**：自動在座位圖上高亮顯示小隊位置
- 📊 **詳細資訊**：顯示小隊名稱、座位位置、隊長姓名
- 💫 **動畫效果**：流暢的過渡動畫和視覺反饋
- 📱 **響應式設計**：支援各種螢幕尺寸

## 技術架構

- **框架**: Next.js 14 (App Router)
- **語言**: TypeScript
- **樣式**: TailwindCSS
- **圖標**: Lucide React
- **部署**: Vercel

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
npm start
```

## 資料格式

小隊資料儲存在 `data/teams.json`，格式如下：

```json
[
  {
    "team_name": "飛鷹隊",
    "positions": ["S223", "S224"],
    "leader": "王小明"
  }
]
```

### 欄位說明

- `team_name`: 小隊名稱（字串）
- `positions`: 座位位置陣列（字串陣列）
- `leader`: 隊長姓名（字串）

## 座位配置

座位圖配置在 `components/SeatMap.tsx` 中，預設為 6 排 x 6 列的配置（S201-S236）。

您可以根據實際需求修改座位佈局：

```typescript
const seatLayout: SeatPosition[][] = [
  // 自訂您的座位配置
];
```

## 部署到 Vercel

### 方法一：使用 Vercel CLI

```bash
npm install -g vercel
vercel
```

### 方法二：透過 Git

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 匯入專案
3. Vercel 會自動偵測 Next.js 並進行部署

## 自訂設定

### 修改主題顏色

編輯 `tailwind.config.js` 中的顏色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 自訂顏色
      },
    },
  },
}
```

### 新增小隊資料

直接編輯 `data/teams.json` 檔案，新增或修改小隊資訊。

## 系統需求

- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理器

## 授權

MIT License

## 聯絡資訊

如有問題或建議，歡迎提出 Issue。
