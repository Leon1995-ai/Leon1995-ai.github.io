# 最常修改的地方

这套主页是纯静态版本，不需要安装 Node.js，也不依赖 React。把整个文件夹上传到 GitHub Pages 就能使用。

## 1. 邮箱 / Google Scholar / ORCID / GitHub / CV

打开 `index.html`，搜索：

```html
CONTACT LINKS
```

取消需要的链接注释，并把 `href` 改成你自己的地址。

例如：

```html
<div class="social-links">
  <a class="social-link" href="mailto:your_email@qfnu.edu.cn">Email</a>
  <a class="social-link" href="https://scholar.google.com/..." target="_blank" rel="noreferrer">Google Scholar</a>
  <a class="social-link" href="https://orcid.org/..." target="_blank" rel="noreferrer">ORCID</a>
  <a class="social-link" href="https://github.com/..." target="_blank" rel="noreferrer">GitHub</a>
  <a class="social-link" href="assets/Yue_Zhang_CV.pdf" target="_blank">CV</a>
</div>
```

如果需要 CV 按钮，把 PDF 放进 `assets/` 文件夹。

## 2. 更换头像

直接替换：

```text
assets/profile.jpg
```

保持文件名不变即可。

## 3. 添加论文

在 `index.html` 搜索：

```html
publication-card
```

复制一整个 `<article class="publication-card"> ... </article>`，然后改论文信息。

如果论文已经发表，可以把：

```html
<span class="status-pill">Submitted manuscript</span>
```

改成：

```html
<span class="status-pill">Published</span>
```

也可以直接删除状态标签。

## 4. 修改统计数字

搜索：

```html
stats-grid
```

目前填写的是：16+ Publications、9 First-author papers、3 Patent applications、IEEE Journal reviewer。

## 5. 如果不想展示投稿中的论文

删除 `Recent Manuscripts` 下对应的 publication card 即可。建议学术主页优先展示正式发表的代表作；等你把完整论文清单给我后，可以再替换成 Selected Publications。
