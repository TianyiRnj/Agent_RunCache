# Agent Run Cache 当前版本公开前审查清单

审查日期：2026-11-08（America/New_York）。代码基线：`4408ef5`；包版本：`1.1.2`。

## 范围与状态

审查、分类和本地验证完成后，已在本地工作树执行品牌替换、媒体删除和许可证补全（2026-11-08，未提交）。仓库 Public 切换未执行，未决和待处理项见各表“处理状态”列。

- 范围：当前工作树中的 152 个已跟踪文件，其中 150 个 UTF-8 文本文件、2 个媒体文件；开始审查时工作树干净，无额外未跟踪或被忽略的本地文件。
- 排除：Git 历史、其他分支、标签、远端 Actions 日志、Artifacts、历史 Releases、Wiki 和附件。它们按本次要求未检查，不能视为已通过。
- 保留：Hyperbrowser 云浏览器集成及其远端服务；本轮不修改任何远端仓库、设置或内容。
- 审查阶段仅新增审查文档和脱敏的验证结果；运行依赖和构建产物位于被忽略的 `node_modules/`、`dist/`，临时验证数据位于系统临时目录。

“审查完成”表示已经找到并分类；“待处理”表示实际清理尚未完成。“保留”表示确认应继续存在，并非遗漏。“处理方式”列是审查时的建议，实际结果以“处理状态”列为准。

逐文件行号、媒体信息和 Lint 明细见 [完整位置清单](public-release-inventory.md)；验证记录和基线文件摘要见 [机器可读基线](public-release-baseline.json)。行号均对应上述代码基线。

## 本地功能基线（改名前）

环境：Node.js `v22.20.0`、Yarn `1.22.22`、本机 Google Chrome。依赖按现有 `yarn.lock` 冻结安装，未更新依赖版本或锁文件。

| 检查 | 结果 | 证据与边界 |
| --- | --- | --- |
| `yarn install --frozen-lockfile --ignore-scripts` | 通过 | 安装时禁用生命周期脚本，之后单独构建 |
| `yarn build` | 通过 | TypeScript 编译、路径别名转换及 CLI 权限设置成功 |
| `yarn cli --help` / `yarn cli --version` | 通过 | 源码 CLI 可加载；仍显示旧品牌，版本为 `1.0.2`，与包版本不一致 |
| `node dist/cli/index.js --help` | 通过 | 编译后的 CLI 可加载 |
| `bash cli.sh --help` | 通过 | 现有 Shell 包装入口可加载 |
| CDP 动作模式本地冒烟 | 10/10 通过 | 真实 LocalBrowserProvider + 独立临时 Chrome 配置 + 合成页面 + 模拟 LLM |
| Playwright 动作模式本地冒烟 | 10/10 通过 | 使用 `cdpActions: false`；DOM 捕获和 XPath 解析仍沿用项目现有 CDP 机制 |
| `yarn test --runInBand` | 失败，既有问题 | 退出码 127：`jest: command not found`；清理前已存在 |
| `yarn lint` | 失败，既有问题 | 21 个错误；Shell 展开未覆盖所有深层 TypeScript 文件 |
| `node_modules/.bin/eslint 'src/**/*.ts' --format json` | 失败，既有问题 | 完整检查 90 个文件，22 个文件有发现，共 88 个错误、1 个警告 |
| `npm pack --dry-run --ignore-scripts --json` | 通过 | 预览 184 个文件；未包含本地环境文件、实际会话、截图或缓存数据；未发布 npm 包 |

两种动作模式各验证以下 10 项：浏览器启动、任务执行与动作录制、JSON 缓存回放且不增加 LLM 调用、生成回放脚本的语法、无有效 XPath 时失败且不调用 LLM、有指令时回退到 `page.perform()`、单步 `page.perform()`、结构化 `page.extract()`、同源 iframe 缓存填充、浏览器关闭与清理。

录制每次产生 3 个成功步骤（填充、点击、完成），缓存经过 JSON 保存与读取后仍可回放。模拟 LLM 的响应也经过项目 Zod schema 校验。未测试真实模型服务、Hyperbrowser 云会话、跨域 iframe 或完整导出脚本的独立执行；不能据此宣称全部集成均已验证。源码、依赖声明及锁文件在验证前后均未改动。

## 改名后验证结果

逐项数据见 [改名后验证记录](public-release-postchange.json)。原始基线文件未覆盖。

| 检查 | 结果 | 与改名前对比 |
| --- | --- | --- |
| `yarn install --frozen-lockfile --offline --ignore-scripts` | 通过 | 相同；`yarn.lock` 哈希未变 |
| `yarn build` | 通过 | 相同 |
| 源码 CLI、编译后 CLI、`cli.sh` 的 `--help` / `--version` | 通过 | 显示新品牌；版本仍为 `1.0.2`（F04） |
| `yarn test --runInBand` | 失败，既有问题 | 相同，退出码 127 |
| `yarn lint` | 失败，既有问题 | 相同，21 个错误 |
| `node_modules/.bin/eslint 'src/**/*.ts' --format json` | 失败，既有问题 | 88 个错误、1 个警告；按路径、规则、消息和源码行比较，无新增、无减少 |
| `npm pack --dry-run --ignore-scripts --json` | 通过（仅文件清单） | 184 项，无环境文件或运行数据；不代表 npm 发布或外部安装已验证 |
| 原始 harness（CDP 与 `cdpActions:false`，内容未改） | 20/20 通过 | 相同 |
| `AgentRunCache` 入口冒烟（含改名前缓存回放、生成脚本校验） | 24/24 通过 | 新增 |
| 环境变量矩阵（8 行 × 4 个调用点，每例新子进程） | 32/32 通过 | 新变量未设置的 3 行与改名前构建一致 |
| 环境变量读取时机 | 4/4 通过 | 模块加载 / 调用时读取均未变 |
| 仓库内包自引用与 6 条 `agent-run-cache*` 路径映射 | 通过 | 新增 |
| `examples/`、`scripts/` 类型检查 | 通过 | 相同，无诊断 |

未测试真实模型服务、Hyperbrowser 云会话、真实 MCP 服务或跨域 iframe；生成脚本做了解析和类型检查，未实际执行。

## 品牌和媒体处理清单

文本匹配：HyperAgent 相关内容覆盖 66 个文件、339 处；Hyperbrowser 覆盖 33 个文件、131 处；旧包路径覆盖 20 个文件、37 处；HyperPage/HyperVariable 覆盖 12 个文件、75 处。各集合有重叠，合计涉及 73 个文本文件。

| ID | 文件位置 | 分类 | 处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- | --- |
| B01 | `package.json:2,4,21,30` | 替换 | 包名、介绍、CLI 命令和项目关键词统一为 Agent Run Cache；新 npm 包名需先确认可用性 | 完成 | 完成。本地包名 `agent-run-cache`、介绍、bin、关键词已改；现有 `hyperagent-cli` 入口保留（兼容）。npm 包名可用性：不适用，本项目仅通过 GitHub 源码分发 |
| B02 | `tsconfig.json:13,16,19,22,25`；`src/index.ts:1` | 替换 | 同步更新包别名、默认导出、命名导出和 CommonJS 导出，避免只改显示名 | 完成 | 完成。路径映射改为 6 条 `agent-run-cache*` 加 `@/*`，旧映射已删除；新增 `AgentRunCache` 命名导出和 CommonJS 导出，`HyperAgent`、default 保留 |
| B03 | `src/agent/index.ts:65`；`src/types/config.ts:75`；`src/types/agent/types.ts:163,178`；`src/llm/types.ts:4` | 替换 | 成组重命名主类、配置、页面、变量、LLM 类型及引用；改名后复跑本地功能基线 | 完成 | 保留（兼容）。未做内部成组重命名；新增 `AgentRunCache`、`AgentRunCacheConfig` 别名，内部 `HyperAgent`、`HyperAgentConfig`、`HyperPage`、`HyperVariable`、`HyperAgentLLM` 保留。已复跑本地功能基线 |
| B04 | `src/agent/error.ts:1`；`src/debug/options.ts:1` | 替换 | 错误类、错误名称和调试类型同步更新 | 完成 | 部分完成。错误消息前缀已改为 `[Agent Run Cache]:`；`HyperagentError` 类名、`.name` 和 `HyperAgentDebugOptions` 保留（兼容） |
| B05 | `src/cli/index.ts:30,31,32,50,151,162,172,215,232,257,286` | 替换 | 命令名称、帮助、交互提示、日志及版本来源统一；保留现有交互和清理行为 | 完成 | 完成。命令名、帮助、交互提示和日志已改；版本来源见 F04 |
| B06 | `.env.example:22,23,24`；`src/context-providers/a11y-dom/index.ts:919`；`src/utils/waitForSettledDOM.ts:28`；`src/llm/providers/openai.ts:16`；`src/llm/providers/anthropic.ts:20` | 替换 | 成组改名 `HYPERAGENT_*` 环境变量及读取逻辑 | 完成 | 完成。新增 `AGENT_RUN_CACHE_*`，非空时优先；`HYPERAGENT_*` 回退保留（兼容）；读取时机和取值规则不变 |
| B07 | `src/context-providers/a11y-dom/bounding-box-batch.ts:50,74,131,267`；`src/cdp/bounding-box.ts:53,56`；`src/context-providers/a11y-dom/scrollable-detection.ts:163,183` | 替换 | 注入函数和调用端同步更名；验证 DOM、坐标、滚动及 iframe 路径 | 完成 | 保留（运行兼容）。`__hyperagent_*` 注入函数未改名 |
| B08 | `src/context-providers/a11y-dom/types.ts:168` | 替换 | 更新旧 DOM 属性名称注释，并核对是否存在实际写入点 | 完成 | 完成。注释已去掉旧属性名；已确认无实际写入点 |
| B09 | `src/agent/mcp/client.ts:85` | 替换 | 更新客户端标识；不改传输协议或远端 MCP 地址 | 完成 | 保留（协议标识）。`hyperagent-mcp-client-*` 未改，MCP 行为不变 |
| B10 | `src/agent/shared/action-cache-script.ts:125,127` | 替换 | 更新生成脚本中的 import 与实例化名称，不能只替换项目现有源文件 | 完成 | 完成。生成脚本使用 `agent-run-cache` 和 `AgentRunCache`；同时修复 `tsc-alias` 把模板内包名改写为 `../../index` 的既有问题 |
| B11 | `README.md:2,26,54,150,192,470,580`；`examples/`；`scripts/` | 替换 | 更新介绍、安装命令、代码示例和输出；所有具体文件及行号见位置清单 | 完成 | 完成。README 安装说明仅保留源码路径；`scripts/` 中 `HyperPage` 为真实类型，保留 |
| B12 | `AGENTS.md:11,36,42`；`CLAUDE.md:7`；`currentState.md:1`；`docs/cdp-overview.md:1036`；相关子目录 `AGENTS.md` | 替换 | 更新名称并校对架构；`currentState.md` 引用了已不存在的旧 DOM 模块，需重整内容 | 完成 | 完成（品牌部分）。`docs/cdp-overview.md` 和子目录 `AGENTS.md` 的命中均为真实符号，保留；`currentState.md` 架构重整见 F06 |
| B13 | `README.md:9,10,12,13,15,16,18,19,27,29,36,386,590,591,592,593` | 删除 / 替换 | 删除旧作者社交徽章、Discord、支持邮箱和宣传入口；包徽章、文档、Issues 及示例链接改成本项目入口 | 完成 | 完成。旧徽章、Discord、X、支持邮箱和推广入口已删除，Issues、示例和文档链接指向本项目 |
| B14 | `assets/hyperagent-banner.png`；`README.md:2` | 删除 / 替换 | 旧图直接含旧 Logo 和名称，替换图像、文件名及 alt 文字 | 完成 | 完成。旧图已删除，README 改用纯文字标题 |
| B15 | `assets/flight-schedule.gif`；`README.md:136` | 删除 / 替换 | 旧终端/地图演示仍显示旧品牌，删除或重录；已抽检 5 个代表帧，不将抽检当作全帧隐私通过 | 完成 | 完成。旧 GIF 和引用已删除；未重录 |
| B16 | 当前全部已跟踪路径 | 删除检查 | 仅发现上述 PNG 与 GIF；未发现已跟踪的独立 MP4、MOV、WEBM 视频 | 完成 | 无额外文件待删 |

## 敏感信息、样例与本地数据

扫描使用已跟踪文件枚举、凭据格式、敏感字段赋值、URL/邮箱/本地路径规则和带引号长字符串熵检查，并人工核对命中位置。未访问任何凭据对应的服务或验证其有效性；以下“未发现”仅指本次当前文件检查。

| ID | 文件位置 | 分类 | 发现与处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- | --- |
| S01 | 150 个当前文本文件 | 删除检查 | 未发现常见 OpenAI、Anthropic、GitHub、AWS、Google、Slack 凭据格式或私钥块；不等于证明不存在任意自定义凭据 | 完成 | 已复核，当前文件无命中。无已确认密钥待删 |
| S02 | `.env.example:3,6,7,8,9,12,15`；LLM provider 中的 `process.env` 引用 | 保留第三方名称 | 7 个 API Key 字段均为空；代码读取环境变量，不是实际密钥 | 完成 | 保留 |
| S03 | `.env.example:17,18,19`；`README.md:89,95,96` | 保留公开演示值 / 替换说明 | 标为 SauceDemo 公开演示账号，无私有账号证据；但引用的 `examples/simple/login-to-saucedemo.ts` 不存在，应删除过期说明或补齐本地样例 | 完成 | 公开演示值保留；失效示例引用未改，待处理 |
| S04 | `evals/WebVoyager_data.jsonl:428`；`evals/WebVoyager_reference.json:2190` | 替换 / 删除候选 | 评测任务及对应答案包含个人邮箱形态，不能仅凭已进入评测集判定为本人私密信息或安全占位符；核实来源，必要时用脚本生成脱敏公开基线 | 完成 | 未决。未核实来源，`evals/` 未改动 |
| S05 | `evals/WebVoyager_data.jsonl:527` | 替换 / 删除候选 | 包含邮箱与密码形态的样例；报告不复制原值。核实是否公开虚构测试账号，必要时重新生成脱敏基线；不手改现有生成数据 | 完成 | 未决。未核实是否公开虚构账号，`evals/` 未改动 |
| S06 | `evals/WebVoyager_reference.json:780,2980`；`evals/WebVoyager_data.jsonl:582` | 保留第三方数据 | 邮箱命中属于 arXiv 作者答案；长字符串高熵命中处为 Hugging Face 数据集名称答案，未认定为凭据。与 S04/S05 区分处理 | 完成 | 保留。数据来源未核对 |
| S07 | `README.md`、`currentState.md`、`docs/cdp-overview.md`、`src/agent/messages/`、`src/types/agent/types.ts` 等 | 保留样例 | 其余邮箱命中主要为 `example.com` 示例；旧支持邮箱按 B13 清理，不误报为用户私密邮箱 | 完成 | 保留样例。旧支持邮箱已按 B13 删除 |
| S08 | `README.md:402`；`examples/mcp/google-sheets/*.ts`；`examples/mcp/notion/create-shopping-list.ts` | 保留第三方名称 | MCP 文档为公开服务入口、`...` 占位或运行参数 `mcpUrl`；未发现提交的带鉴权私有 MCP URL、内网地址或 URL 用户名密码 | 完成 | 保留 |
| S09 | `.github/workflows/claude.yml:37` | 保留配置引用 | `${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}` 是 GitHub Secret 引用，不是 Token 值；不推断远端 Secret 是否存在 | 完成 | 保留 |
| S10 | 当前全部已跟踪路径；`.gitignore` | 删除检查 | 未发现实际 `.env`、浏览器 profile、storage state、Cookie 导出、HAR、调试截图或缓存结果文件；存在的是缓存实现源码 | 完成 | 已复核，无当前数据待删 |
| S11 | `src/cli/index.ts:98,104,109`；`src/agent/messages/builder.ts`；`src/agent/tools/agent.ts:418` | 替换，运行时数据处理 | 密码交互把响应写入 action message，后续可进入模型消息及调试输出；未发现实际密码存档。后续改成变量引用或脱敏，并验证交互行为 | 完成 | 待处理（本轮不改） |
| S12 | `src/agent/mcp/client.ts:47,49`；`src/agent/shared/action-cache.ts:134,135`；`src/agent/tools/agent.ts:375,378,418` | 替换，运行时数据处理 | 调试模式可输出完整 MCP URL、DOM、消息和截图；缓存保留动作参数。当前未提交这些产物；后续为可分享输出增加明确的脱敏/变量化方式 | 完成 | 待处理（本轮不改） |
| S13 | `.gitignore:79` 起 dotenv 规则；`README.md:83` | 替换 / 补全 | 当前忽略具体常见 `.env` 文件，但不覆盖所有自定义 `.env.*`；宜统一为 `.env.*` 并明确保留 `.env.example`，使说明与规则一致 | 完成 | 待处理（本轮不改） |

## 确认保留的第三方和版权内容

| ID | 文件位置 | 分类 | 处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- | --- |
| K01 | `package.json:42`；`yarn.lock:253,255`；`src/browser-providers/hyperbrowser.ts` | 保留第三方名称 | 保留真实的 `@hyperbrowser/sdk` 依赖、服务名和 Provider；不把第三方 SDK 改成不存在的新包 | 完成 | 保留 |
| K02 | `src/types/config.ts:58,87`；`src/cli/index.ts:41,56,73`；`.env.example:11,12` | 保留第三方名称 | 保留 `Hyperbrowser` provider 选项、`--hyperbrowser`、`HYPERBROWSER_API_KEY` 及服务配置；CLI 的项目品牌按 B05 改 | 完成 | 保留 |
| K03 | `examples/browser-providers/hyperbrowser.ts`；`src/browser-providers/index.ts`；`src/browser-providers/AGENTS.md` | 保留第三方名称 / 替换项目名称 | 保留集成示例及服务名称，只替换其中指代本项目的主类、包名和说明 | 完成 | 第三方保留；指代本项目的名称已替换 |
| K04 | `LICENSE:1,4,6`；`package.json:9` | 必须保留版权声明 | 保留上游版权与现有 AGPL 声明；当前文件只有简短声明，应补齐许可证全文、核对 package 许可标识并增加修改说明与日期 | 完成 | 上游声明逐字保留；AGPL-3.0 全文（来源 gnu.org）和修改说明（2026-11-08）已补；`AGPL-3.0` 标识与 “or later” 声明的差异待记录，未调整 |
| K05 | 各 LLM provider、Playwright/CDP、MCP、Composio、WebVoyager 等真实依赖/数据来源 | 保留第三方名称 | 保留真实技术和来源名称，不将它们纳入旧产品品牌清零要求 | 完成 | 保留 |

## 既有功能与文档问题的处理项

| ID | 文件位置 | 处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- |
| F01 | `package.json:15` | 补齐与项目匹配的测试执行器和测试入口；当前不能把 `yarn test` 计为通过 | 完成 | 待处理（既有问题） |
| F02 | `package.json:12`；完整位置清单中的 Lint 表 | 给 `src/**/*.ts` 加引号，确保递归扫描；修复已有 88 个错误、1 个警告，不通过禁用规则清零 | 完成 | 待处理（既有问题）；本次无新增诊断 |
| F03 | `package.json:11` | 删除或修正指向已删除 `src/context-providers/dom/builder.ts` 的脚本 | 完成 | 待处理（既有问题） |
| F04 | `src/cli/index.ts:32`；`package.json:3` | CLI 与包版本使用一致来源，当前分别为 `1.0.2`、`1.1.2` | 完成 | 待处理（既有问题）；CLI 版本仍为 `1.0.2` |
| F05 | `README.md:513`；`src/index.ts`；`src/types/index.ts` | 文档把 `ActionCacheOutput` 从包根导入，但根入口未导出该类型；改用实际 types 入口或有意补齐导出 | 完成 | 完成。README 改从 `agent-run-cache/types` 导入，未新增根导出 |
| F06 | `currentState.md:102,115,160` | 重整已失效的 DOM 模块、动作名称和架构描述，避免改名后继续传播过期说明 | 完成 | 待处理（既有问题）；本轮只改品牌文字 |
| F07 | `package.json:23`；`README.md:2,136` | npm 包预览未包含 `assets/`；替换 README 媒体时同步决定是否打包资源或使用公开可访问地址 | 完成 | 不再适用。README 不再引用图片或 GIF |

## 本轮交付与后续验收

- [x] 记录当前文件基线与环境。
- [x] 盘点当前版本品牌文字、路径、链接和媒体。
- [x] 扫描并人工分类凭据、邮箱、私有端点和本地数据候选。
- [x] 分开列出替换、删除、保留第三方名称、必须保留版权声明。
- [x] 完成构建、CLI 与 20 项本地核心功能检查，记录既有失败。
- [x] 按要求跳过 Git 历史和远端日志，不变更远端服务。
- [x] 执行本轮范围内的 B、K 项和 F05，并更新状态。
- [ ] S03、S04、S05、S11–S13、F01–F04、F06 继续未决或待处理。
- [x] 清理后重跑相同功能场景，验证 SDK、CLI 及生成脚本使用新名称；DOM 注入函数按兼容要求保留原名。
- [ ] 核实敏感样例处理、许可证、文档和媒体后，再判断当前版本是否满足公开条件。

此文档及位置清单中出现旧名称仅用于记录审查对象，属于审查证据；后续品牌扫描应将这类证据与产品对外内容区分。
