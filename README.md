# 蒲公英梦境 - 3D 摄像头交互世界

一个用 **Three.js + MediaPipe** 构建的 3D 蒲公英梦境世界。通过摄像头实时检测手势和面部表情来与场景互动。

## ✨ 特效

- 🌤️ 渐变蓝天 + GSAP 循环云朵
- 🌱 多层草地质感 + 草叶粒子
- 🌼 200+ 蒲公英植株，风吹摇曳
- 💫 GSAP 弹性动画

## 🎮 交互手势

| 手势 | 效果 |
|------|------|
| 👌 捏合 | 抓取最近蒲公英并居中放大 |
| 💨 捏合中撅嘴 | 在聚焦视图中吹散该株种子 |
| ✋ 松开捏合 | 轻轻放下 |
| 🖐 5指展开 (持续) | 全部复原 |
| 😮 撅起嘴巴 | 以唇部为圆心区域吹散 |
| 🙏 双手合十 (吹散后) | 弹出庆祝弹窗，再玩一次 |

### 键盘备用操作
- `B` = 区域吹散
- `G` = 抓取
- `P` = 放下
- `R` = 全部复原
- `D` = 切换调试面板

## 🚀 本地运行

由于 MediaPipe WASM 受 CORS 限制，必须通过 HTTP 服务器访问（不能直接打开 `file://`）：

```bash
node server.js
# 然后访问 http://localhost:8899/dandelion-world.html
```

## 🛠️ 技术栈

- **Three.js** r128 - 3D 渲染
- **GSAP** 3.12 - 动画引擎
- **MediaPipe Hands** - 21 关键点手部检测
- **MediaPipe FaceMesh** - 468 关键点面部检测
- **零依赖 Node.js HTTP 服务器** - 解决 CORS

## 📁 项目结构

```
.
├── dandelion-world.html  # 主程序（单文件包含所有 CSS/JS/HTML）
├── server.js             # 零依赖 Node.js HTTP 静态服务器（端口 8899）
└── README.md
```
