# 旅行网页生成器 Skill

把旅行日期、订单截图、PDF、地图链接和旅行攻略整理成：

- 可直接部署的静态旅行网页压缩包
- 排版完成的旅行行程 PDF
- 可选的个人完整版旅行资料 PDF
- GitHub + Cloudflare Pages 部署说明

适合希望用 AI 整理旅行计划，但不懂网页开发的普通用户。

## 核心特点

- 先整理和确认行程，再生成最终文件
- 支持读取机票、酒店、门票、餐厅预约等截图或 PDF
- 支持小红书、Google 地图及其他攻略链接
- 自动检查时间冲突、交通衔接、行李寄存、营业时间和时区
- 网页适配手机和电脑，支持每日行程展开、地图跳转和打印
- 默认生成不需要数据库和构建命令的静态网页
- 可以指导用户将网页部署到 GitHub 和 Cloudflare Pages

## 隐私模式

Skill 开始工作时会先让用户选择：

1. **公开分享，不包含个人信息（推荐）**  
   自动隐藏二维码、订单号、姓名、联系方式、座位号和订单截图。

2. **仅供自己使用，包含完整信息**  
   可以整理完整票据和预约资料，但不建议上传到公开网站。

3. **公开分享，保留指定个人信息**  
   用户需要逐项选择公开内容，并经过风险提示和二次确认。

重要原则：没有显示链接不等于文件安全。公开网页压缩包中不会放入未经允许公开的原始票据或附件。

## 安装方法

### ChatGPT / Codex

下载或克隆本仓库，将整个 `travel-itinerary-publisher` 文件夹安装到支持 Skills 的环境中。必须保留 `SKILL.md`、`agents`、`assets` 和 `references` 的相对位置。

如果平台支持上传 Skill 压缩包，也可以直接上传本项目的 ZIP 文件。

### 本地 Codex 环境

将项目文件夹复制到：

```text
~/.codex/skills/travel-itinerary-publisher/
```

重新启动或刷新 Codex 后即可使用。

## 使用方法

可以直接发送：

```text
使用 $travel-itinerary-publisher 帮我整理旅行计划，生成可以分享的网页压缩包和 PDF 行程。
```

Skill 会首先询问网页是公开分享还是仅供本人使用，然后收集：

- 旅行日期、出发地和目的地
- 同行人数及老人、儿童等情况
- 已确定的交通、住宿、门票和餐厅
- 想去的景点和攻略链接
- 旅行节奏、步行量、兴趣和饮食要求
- 网页标题、语言、颜色及其他偏好

用户可以直接上传订单截图、PDF或发送地图和攻略链接，不需要先把资料整理成表格。

## 输出文件

根据用户选择，通常生成：

```text
旅行名称_公开分享版_网页.zip
旅行名称_公开分享版_行程.pdf
旅行名称_个人完整版_资料.pdf（可选）
旅行名称_GitHub与Cloudflare部署说明.pdf
```

公开分享版网页是纯静态文件，通常包括：

```text
index.html
style.css
app.js
data.js
itinerary.json
assets/
```

解压后可以本地预览，也可以上传到 GitHub 并使用 Cloudflare Pages 发布。

## 部署说明

Skill 默认只生成文件，不会擅自登录账号、创建 GitHub 仓库或部署网站。

用户提出需要部署后，Skill会：

1. 再次确认上传的是安全公开版
2. 指导用户新建 GitHub 仓库并上传网页文件
3. 指导用户在 Cloudflare Pages 连接仓库
4. 检查部署错误并指导修正

为了减少操作错误，部署指导采用一步一步确认的方式，不会一次发出全部操作。

## 项目结构

```text
travel-itinerary-publisher/
├── SKILL.md
├── README.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── site-template/
│       ├── index.html
│       ├── style.css
│       ├── app.js
│       ├── data.js
│       └── itinerary.json
└── references/
    ├── privacy-modes.md
    ├── input-and-review.md
    ├── output-spec.md
    └── deployment.md
```

## 安全提醒

- 不要把包含二维码、订单号、姓名、联系方式或付款信息的完整资料上传到公开仓库。
- 公开部署前应查看 Skill 生成的隐私检查报告。
- GitHub 公共仓库中的全部文件都可能被他人下载。
- 个人完整版 PDF 和网页应只保存在本人设备上。

## 当前版本范围

当前版本主要生成静态网页和 PDF，不包含在线编辑、多人协作、云端票据保存或网站密码系统。
