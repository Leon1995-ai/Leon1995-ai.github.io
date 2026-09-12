# Yue Zhang Academic Homepage

一套可直接部署到 GitHub Pages 的学术主页源码。

## 特点

- 无需安装任何前端环境
- 纯 HTML + CSS + JavaScript
- 响应式桌面 / 手机布局
- 浅色 / 深色模式
- 顶部导航 + 左侧研究关键词 + 右侧学术主体
- GitHub Actions 自动发布
- 已使用提供的个人照片

## 最推荐的 GitHub 部署方式

假设 GitHub 用户名是 `yourname`：

1. 新建仓库：

```text
yourname.github.io
```

2. 把压缩包解压后的**所有文件**上传到仓库根目录。
3. GitHub 仓库打开：`Settings` → `Pages`。
4. 在 `Build and deployment` 中选择：`GitHub Actions`。
5. 回到 `Actions`，等待 `Deploy static academic homepage to GitHub Pages` 完成。
6. 访问：

```text
https://yourname.github.io/
```

## 修改内容

请先看：

```text
EDIT-ME.md
```

最需要补充的是：

- Email
- Google Scholar
- ORCID
- GitHub
- CV PDF
- 完整 Selected Publications

## 本地预览

直接双击 `index.html` 即可预览主要页面。也可以使用 VS Code 的 Live Server。
Last updated: 2026-09-12
