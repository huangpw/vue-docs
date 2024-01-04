---
 outline: [2,3,4]
---
# 常用库 / 实用插件

## 远程调试插件

### Page Spy

**PageSpy** 是一款用来调试远程 Web 项目的工具。

基于对原生 API 的封装，它将调用原生方法时的参数进行过滤、转化，整理成格式规范的消息供调试端消费；调试端收到消息数据，提供类控制台可交互式的功能界面将数据呈现出来。

- PageSpy：https://huolalatech.github.io/page-spy-web
- 官方文档：https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md



## Node版本管理工具

### Volta

`Volta` 是一种管理 JavaScript 命令行工具的便捷方式。

**`volta` 的特点：**

- 速度
- 无缝，每个项目的版本切换
- 跨平台支持，包括 Windows 和所有 Unix shell
- 支持多个包管理器
- 稳定的工具安装-无需每次升级都重新安装!
- 可扩展性挂钩用于特定于站点的定制

**资源地址：**

- 官方网站：https://volta.sh/

- 仓库资源：https://github.com/volta-cli/volta
- 下载地址：https://github.com/volta-cli/volta/releases

#### mac安装

mac安装nvm和volta都很简单，这里直接使用官方的安装方法。

```bash
curl https://get.volta.sh | bash
```

使用以上命令就可以安装好volta了，使用命令验证volta安装是否成功。

```bash
volta -v 
```

细心的开发者可能已经发现，安装完成后，volta命令还无法使用，这是因为添加到环境变量中后，还未生效，我们需要执行如下所示的命令来让其生效：

```bash
source ~/.bash_profile
```

最后，我们再次执行volta命令它就可以正常使用了。

#### 安装node

```bash
volta install node@16
```



### NVM

**Node Version Manager（NVM）** 是一种用于管理多个主动节点.js版本的工具。

Node.js平台，Node.js工具社区和Node.js库是快速移动的目标 - 在一个Node.js版本下可能有效的方法不能保证适用于另一个版本的Node.js。

**资源地址：**

- 仓库资源：https://github.com/nvm-sh/nvm



#### Windows安装

下载链接：https://github.com/coreybutler/nvm-windows/releases

安装教程：https://blog.csdn.net/qq_22182989/article/details/125387145



#### mac安装

仓库资源：https://github.com/nvm-sh/nvm

安装教程：https://www.jianshu.com/p/86a83db7ce60
