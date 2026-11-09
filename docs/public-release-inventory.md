# Agent Run Cache 当前版本位置清单

审查日期：2026-11-08（America/New_York）；基线：`4408ef5`。对应 [主审查清单](public-release-checklist.md)。本文件记录命中位置，不复制密码、Token、邮箱原值或完整鉴权 URL。

> 本文件是改名前证据，行号和“处理状态”列停留在基线 `4408ef5`。实际处理结果以[主审查清单](public-release-checklist.md)和[改名后验证记录](public-release-postchange.json)为准。

## 品牌逐文件清单

行号类别：HA = HyperAgent 及其大小写/下划线变体；HB = Hyperbrowser（包括旧包 scope）；HP = HyperPage/HyperVariable；PKG = 旧项目包路径。HB 并不全部需要替换：真实 SDK、服务名称和配置按主清单 K01–K03 保留。

| 文件 | 命中行号 | 处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- |
| [.env.example](../.env.example#L11) | HA: 22, 23, 24<br>HB: 11, 12 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [AGENTS.md](../AGENTS.md#L7) | HA: 11<br>HB: 7, 26<br>HP: 36, 42 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [CLAUDE.md](../CLAUDE.md#L7) | HA: 7, 28, 29, 43, 45, 73, 74, 75<br>HB: 7, 16, 42, 62, 72<br>HP: 7, 56<br>PKG: 7, 62 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [README.md](../README.md#L2) | HA: 2, 12, 26, 29, 54, 57, 72, 86, 101, 136, 150, 154, 192, 268, 275, 315, 320, 345, 349, 357, 365, 373, 383, 386, 389, 421, 459, 470, 521, 564, 566, 580, 590, 592<br>HB: 9, 10, 12, 13, 27, 29, 36, 46, 49, 55, 89, 132, 139, 144, 150, 268, 270, 271, 272, 276, 386, 513, 590, 592, 593<br>PKG: 9, 10, 13, 46, 49, 55, 89, 132, 150, 513 | 替换项目品牌并删除旧宣传入口；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [currentState.md](../currentState.md#L1) | HA: 1, 4, 12, 17, 379<br>HB: 373, 380, 382<br>HP: 24, 25, 33, 38, 344 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [docs/cdp-overview.md](../docs/cdp-overview.md#L1036) | HA: 1036, 1065, 1682, 1743, 3156 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/browser-providers/hyperbrowser.ts](../examples/browser-providers/hyperbrowser.ts#L2) | HA: 4, 10, 27, 32<br>HB: 2, 4, 10, 22, 27, 38, 39<br>PKG: 27 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [examples/custom-tool/search/exa.ts](../examples/custom-tool/search/exa.ts#L4) | HA: 4, 45, 93<br>HB: 45, 50<br>PKG: 45, 50 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/custom-tool/wikipedia-random-article/run-custom-tool.ts](../examples/custom-tool/wikipedia-random-article/run-custom-tool.ts#L4) | HA: 4, 27, 62<br>HB: 27, 32<br>PKG: 27, 32 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/llms/anthropic.ts](../examples/llms/anthropic.ts#L4) | HA: 4, 10, 27, 35<br>HB: 27<br>PKG: 27 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/llms/deepseek.ts](../examples/llms/deepseek.ts#L4) | HA: 4, 10, 27, 35<br>HB: 27<br>PKG: 27 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/llms/gemini.ts](../examples/llms/gemini.ts#L4) | HA: 4, 10, 27, 35<br>HB: 27<br>PKG: 27 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/llms/openai.ts](../examples/llms/openai.ts#L4) | HA: 4, 10, 27, 35<br>HB: 27<br>PKG: 27 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/mcp/google-sheets/best-buy-reviews.ts](../examples/mcp/google-sheets/best-buy-reviews.ts#L4) | HA: 4, 65, 87, 90<br>HB: 65<br>PKG: 65 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/mcp/google-sheets/car-price-comparison.ts](../examples/mcp/google-sheets/car-price-comparison.ts#L4) | HA: 4<br>HB: 68, 98, 101<br>PKG: 68 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/mcp/google-sheets/most-populated-states.ts](../examples/mcp/google-sheets/most-populated-states.ts#L4) | HA: 4, 65, 85, 88<br>HB: 65<br>PKG: 65 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/mcp/notion/create-shopping-list.ts](../examples/mcp/notion/create-shopping-list.ts#L4) | HA: 4<br>HB: 58, 85, 88<br>PKG: 58 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/mcp/weather/get-weather-alert.ts](../examples/mcp/weather/get-weather-alert.ts#L4) | HA: 4, 47, 66<br>HB: 47, 63<br>PKG: 47 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [examples/output-to-schema/output-to-schema.ts](../examples/output-to-schema/output-to-schema.ts#L4) | HA: 4, 27, 38<br>HB: 27, 48<br>PKG: 27 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [examples/simple/add-to-amazon-cart.ts](../examples/simple/add-to-amazon-cart.ts#L4) | HA: 4, 27, 33<br>HB: 27<br>PKG: 27 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [package.json](../package.json#L2) | HA: 21<br>HB: 2, 4, 30, 42<br>PKG: 2 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [scripts/dogcat.ts](../scripts/dogcat.ts#L3) | HA: 3, 16, 19, 20, 21, 32, 89, 93<br>HP: 4, 30 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/gasPrice.ts](../scripts/gasPrice.ts#L4) | HA: 5, 17, 20, 21, 22, 39, 107, 111<br>HP: 4, 37 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/hotelInvoice.ts](../scripts/hotelInvoice.ts#L3) | HA: 4, 17, 20, 21, 22, 33, 183, 187<br>HP: 3, 31 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/run-webvoyager-eval.ts](../scripts/run-webvoyager-eval.ts#L1) | HA: 1, 187, 299<br>HB: 304 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [scripts/test-async.ts](../scripts/test-async.ts#L1) | HA: 1, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/test-extract.ts](../scripts/test-extract.ts#L2) | HA: 2, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/test-page-ai.ts](../scripts/test-page-ai.ts#L1) | HA: 1, 7, 45<br>HB: 16, 50 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [scripts/test-page-iframes.ts](../scripts/test-page-iframes.ts#L1) | HA: 1, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/test-variables.ts](../scripts/test-variables.ts#L1) | HA: 1, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [scripts/test.ts](../scripts/test.ts#L1) | HA: 1, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/actions/extract.ts](../src/agent/actions/extract.ts#L75) | HA: 75 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/error.ts](../src/agent/error.ts#L1) | HA: 1, 6, 7 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/examine-dom/index.ts](../src/agent/examine-dom/index.ts#L8) | HA: 8, 43 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/index.ts](../src/agent/index.ts#L6) | HA: 6, 10, 35, 65, 76, 106, 115, 121, 253, 267, 278, 308, 322, 345, 394, 474, 900, 908, 969, 1109, 1110, 1116, 1137, 1145, 1161, 1265, 1282, 1283, 1288, 1298, 1554, 1592<br>HB: 32, 81, 82, 130, 131, 132, 136, 155<br>HP: 45, 46, 92, 95, 97, 205, 214, 223, 246, 248, 255, 260, 262, 270, 332, 535, 542, 598, 614, 615, 616, 648, 649, 650, 680, 706, 767, 774, 1473, 1474, 1477, 1478, 1490, 1506, 1521, 1544, 1560, 1563, 1566, 1570, 1572, 1583, 1587, 1590, 1638 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [src/agent/mcp/client.ts](../src/agent/mcp/client.ts#L85) | HA: 85 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/messages/builder.ts](../src/agent/messages/builder.ts#L2) | HA: 2, 10, 17<br>HP: 7, 16 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/action-cache-exec.ts](../src/agent/shared/action-cache-exec.ts#L1) | HP: 1, 28, 67 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/action-cache-script.ts](../src/agent/shared/action-cache-script.ts#L125) | HA: 125, 127<br>HB: 125<br>PKG: 125 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/element-locator.ts](../src/agent/shared/element-locator.ts#L3) | HA: 3, 12, 50, 70, 98 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/execute-playwright-method.ts](../src/agent/shared/execute-playwright-method.ts#L3) | HA: 3 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/find-element.ts](../src/agent/shared/find-element.ts#L7) | HA: 7, 63 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/shared/xpath-cdp-resolver.ts](../src/agent/shared/xpath-cdp-resolver.ts#L3) | HA: 3, 35, 67, 78 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/tools/agent.ts](../src/agent/tools/agent.ts#L28) | HA: 31, 39, 221, 226, 234<br>HB: 28, 29<br>PKG: 28, 29 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/agent/tools/types.ts](../src/agent/tools/types.ts#L3) | HA: 3, 14<br>HP: 4, 11 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/browser-providers/AGENTS.md](../src/browser-providers/AGENTS.md#L9) | HB: 9 | 保留真实第三方名称 | 完成 | 保留 |
| [src/browser-providers/hyperbrowser.ts](../src/browser-providers/hyperbrowser.ts#L2) | HB: 2, 5, 7, 11, 14, 17, 24, 34, 45 | 保留真实第三方名称 | 完成 | 保留 |
| [src/browser-providers/index.ts](../src/browser-providers/index.ts#L1) | HB: 1, 4 | 保留真实第三方名称 | 完成 | 保留 |
| [src/cdp/bounding-box.ts](../src/cdp/bounding-box.ts#L53) | HA: 53, 56 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/cli/AGENTS.md](../src/cli/AGENTS.md#L8) | HA: 8<br>HB: 10 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [src/cli/index.ts](../src/cli/index.ts#L11) | HA: 11, 22, 50, 71, 151, 162, 172, 215, 232, 257, 286<br>HB: 23, 30, 31, 41, 45, 55, 56, 59, 64, 68, 73, 273 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [src/context-providers/a11y-dom/bounding-box-batch.ts](../src/context-providers/a11y-dom/bounding-box-batch.ts#L50) | HA: 50, 74, 131, 267 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/context-providers/a11y-dom/index.ts](../src/context-providers/a11y-dom/index.ts#L919) | HA: 919 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/context-providers/a11y-dom/scrollable-detection.ts](../src/context-providers/a11y-dom/scrollable-detection.ts#L163) | HA: 163, 183 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/context-providers/a11y-dom/types.ts](../src/context-providers/a11y-dom/types.ts#L168) | HA: 168 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/custom-actions/AGENTS.md](../src/custom-actions/AGENTS.md#L9) | HA: 9 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/debug/options.ts](../src/debug/options.ts#L1) | HA: 1, 8, 12, 19 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/index.ts](../src/index.ts#L1) | HA: 1, 4, 5, 9, 10, 12 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/AGENTS.md](../src/llm/AGENTS.md#L8) | HA: 8 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L4) | HA: 4, 5, 6, 7, 20, 21, 38, 54, 95, 96, 125, 137, 240 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/providers/deepseek.ts](../src/llm/providers/deepseek.ts#L3) | HA: 3, 4, 5, 6, 7, 9, 23, 47, 56, 57, 60, 111, 112 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/providers/gemini.ts](../src/llm/providers/gemini.ts#L4) | HA: 4, 5, 6, 7, 20, 39, 75, 76, 123 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/providers/index.ts](../src/llm/providers/index.ts#L1) | HA: 1, 18, 66 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L4) | HA: 4, 5, 6, 7, 9, 16, 17, 36, 40, 71, 88, 96, 152, 153, 216 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/types.ts](../src/llm/types.ts#L4) | HA: 4, 6, 11, 19, 25, 26, 27, 28, 30, 32, 33, 36, 37, 44, 47, 53, 67, 71, 76, 78, 79, 82, 89, 90, 94 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/llm/utils/message-converter.ts](../src/llm/utils/message-converter.ts#L1) | HA: 1, 13, 22, 61, 130, 147 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/types/agent/actions/types.ts](../src/types/agent/actions/types.ts#L3) | HA: 3, 12<br>HP: 6, 14 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L163) | HP: 163, 170, 178 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/types/config.ts](../src/types/config.ts#L2) | HA: 2, 70, 75, 82, 85<br>HB: 5, 58, 87, 88 | 替换项目品牌；保留真实服务/API | 完成 | 待处理（第三方保留） |
| [src/types/index.ts](../src/types/index.ts#L30) | HA: 30, 63 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [src/utils/waitForSettledDOM.ts](../src/utils/waitForSettledDOM.ts#L28) | HA: 28, 29 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [tsconfig.json](../tsconfig.json#L13) | HB: 13, 16, 19, 22, 25<br>PKG: 13, 16, 19, 22, 25 | 替换项目名称、符号、包路径或注释；同步调用方 | 完成 | 待处理 |
| [yarn.lock](../yarn.lock#L253) | HB: 253, 255 | 保留真实第三方名称 | 完成 | 保留 |

## 当前媒体

| 文件 | 格式与大小 | 当前发现 | 处理方式 | 审查状态 | 处理状态 |
| --- | --- | --- | --- | --- | --- |
| `assets/hyperagent-banner.png` | PNG；4856×664；80,008 bytes | 图像直接包含旧 Logo 和名称 | 删除或替换图像、文件名、README 引用和 alt | 完成 | 待处理 |
| `assets/flight-schedule.gif` | GIF；1920×1080；166 帧；5,435,603 bytes | 抽检第 1、42、84、125、166 帧，旧 CLI/地图演示含旧品牌 | 删除或重录；不将抽检记为全帧隐私通过 | 完成 | 待处理 |
| 当前其他路径 | 未发现已跟踪独立视频或其他二进制资源 | 不包含依赖与构建产物 | 无额外媒体待清理 | 完成 | 无发现 |

## 旧宣传和外部链接

| 位置 | 链接类型 | 处理方式 | 处理状态 |
| --- | --- | --- | --- |
| `README.md:9,10,12,13` | 旧 npm 包、版本与许可徽章、旧仓库 LICENSE | 新包可用后替换包徽章；许可证指向本仓库 | 待处理 |
| `README.md:15,16,591` | 旧 Discord 社区与徽章 | 删除旧社区入口 | 待处理 |
| `README.md:18,19` | 原作者个人 X 账号与关注徽章 | 删除 | 待处理 |
| `README.md:27,29,36,590` | 原平台推广与旧文档 | 删除推广入口，文档指向本项目；真实集成文档保留必要服务名称 | 待处理 |
| `README.md:270,271` | Hyperbrowser 可选服务说明 | 保留功能准确的集成说明，与项目首页推广分开 | 保留第三方 |
| `README.md:386,592` | 旧仓库示例和 Issue Tracker | 指向本仓库相应位置 | 待处理 |
| `README.md:593` | 原平台支持邮箱 | 删除或改成本项目实际支持入口，不复制邮箱原值至审查产物 | 待处理 |
| 其他依赖、MCP、数据集与标准文档链接 | 真实技术或来源 | 保留；此次只审查归属及可疑地址，未逐一验证所有外站可用性 | 保留第三方 |

## 完整递归 Lint 基线

命令：`node_modules/.bin/eslint 'src/**/*.ts' --format json`。90 个文件接受检查，22 个文件有发现，共 88 个错误、1 个警告；均在品牌改动前出现。现有 `yarn lint` 因未引用 glob 只报告 21 个错误，不代表完整结果。

| 文件 | 行:列 | 级别 | 规则 | 处理方式 | 处理状态 |
| --- | --- | --- | --- | --- | --- |
| [src/agent/actions/complete-with-output-schema.ts](../src/agent/actions/complete-with-output-schema.ts#L5) | 5:27 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/actions/index.ts](../src/agent/actions/index.ts#L5) | 5:10 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/actions/index.ts](../src/agent/actions/index.ts#L6) | 6:10 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/actions/index.ts](../src/agent/actions/index.ts#L7) | 7:10 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L189) | 189:30 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L604) | 604:33 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L674) | 674:33 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L724) | 724:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1082) | 1082:5 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1150) | 1150:11 | 错误 | `prefer-const` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1477) | 1477:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1478) | 1478:21 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1521) | 1521:19 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/index.ts](../src/agent/index.ts#L1537) | 1537:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/mcp/client.ts](../src/agent/mcp/client.ts#L64) | 64:37 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/mcp/client.ts](../src/agent/mcp/client.ts#L129) | 129:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/mcp/client.ts](../src/agent/mcp/client.ts#L183) | 183:32 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/mcp/client.ts](../src/agent/mcp/client.ts#L185) | 185:14 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/action-cache-script.ts](../src/agent/shared/action-cache-script.ts#L65) | 65:31 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/action-cache.ts](../src/agent/shared/action-cache.ts#L119) | 119:30 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/action-cache.ts](../src/agent/shared/action-cache.ts#L121) | 121:41 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/dom-capture.ts](../src/agent/shared/dom-capture.ts#L135) | 135:15 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L28) | 28:8 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L29) | 29:14 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L58) | 58:37 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L174) | 174:5 | 警告 | `unused eslint-disable directive` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L219) | 219:8 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/agent/shared/run-cached-action.ts](../src/agent/shared/run-cached-action.ts#L220) | 220:14 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/cdp/element-resolver.ts](../src/cdp/element-resolver.ts#L164) | 164:16 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/cdp/types.ts](../src/cdp/types.ts#L2) | 2:12 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/cdp/types.ts](../src/cdp/types.ts#L3) | 3:43 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/cdp/types.ts](../src/cdp/types.ts#L4) | 4:45 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/build-maps.ts](../src/context-providers/a11y-dom/build-maps.ts#L18) | 18:3 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/build-maps.ts](../src/context-providers/a11y-dom/build-maps.ts#L24) | 24:15 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L12) | 12:29 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L17) | 17:29 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L49) | 49:54 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L99) | 99:48 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L125) | 125:87 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L126) | 126:83 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L149) | 149:47 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L154) | 154:22 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L315) | 315:29 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/performance.ts](../src/context-providers/a11y-dom/performance.ts#L332) | 332:29 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/context-providers/a11y-dom/scrollable-detection.ts](../src/context-providers/a11y-dom/scrollable-detection.ts#L182) | 182:7 | 错误 | `@typescript-eslint/ban-ts-comment` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L62) | 62:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L71) | 71:38 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L157) | 157:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L158) | 158:34 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L163) | 163:15 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L257) | 257:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L258) | 258:34 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/anthropic.ts](../src/llm/providers/anthropic.ts#L271) | 271:38 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/deepseek.ts](../src/llm/providers/deepseek.ts#L68) | 68:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/deepseek.ts](../src/llm/providers/deepseek.ts#L95) | 95:57 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/deepseek.ts](../src/llm/providers/deepseek.ts#L118) | 118:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/deepseek.ts](../src/llm/providers/deepseek.ts#L121) | 121:42 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/gemini.ts](../src/llm/providers/gemini.ts#L40) | 40:5 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/gemini.ts](../src/llm/providers/gemini.ts#L47) | 47:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/gemini.ts](../src/llm/providers/gemini.ts#L55) | 55:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/gemini.ts](../src/llm/providers/gemini.ts#L82) | 82:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/index.ts](../src/llm/providers/index.ts#L2) | 2:30 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/index.ts](../src/llm/providers/index.ts#L3) | 3:33 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/index.ts](../src/llm/providers/index.ts#L4) | 4:30 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/index.ts](../src/llm/providers/index.ts#L5) | 5:32 | 错误 | `@typescript-eslint/no-unused-vars` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L39) | 39:12 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L46) | 46:31 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L109) | 109:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L136) | 136:57 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L173) | 173:35 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/llm/providers/openai.ts](../src/llm/providers/openai.ts#L176) | 176:42 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/actions/types.ts](../src/types/agent/actions/types.ts#L34) | 34:11 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/actions/types.ts](../src/types/agent/actions/types.ts#L39) | 39:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/actions/types.ts](../src/types/agent/actions/types.ts#L45) | 45:23 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/actions/types.ts](../src/types/agent/actions/types.ts#L45) | 45:40 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L7) | 7:49 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L7) | 7:68 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L99) | 99:28 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L157) | 157:8 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L158) | 158:14 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L235) | 235:31 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/types/agent/types.ts](../src/types/agent/types.ts#L239) | 239:34 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/debugWriter.ts](../src/utils/debugWriter.ts#L19) | 19:16 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L15) | 15:27 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L15) | 15:41 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L22) | 22:49 | 错误 | `@typescript-eslint/no-explicit-any` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L23) | 23:5 | 错误 | `no-var` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L24) | 24:5 | 错误 | `no-var` | 修复，不禁用规则 | 待处理（既有问题） |
| [src/utils/html-to-markdown.ts](../src/utils/html-to-markdown.ts#L56) | 56:30 | 错误 | `no-useless-escape` | 修复，不禁用规则 | 待处理（既有问题） |

## 敏感候选和版权位置

S01–S13、K01–K05 的处理方式和状态见 [主审查清单](public-release-checklist.md)。主要复核点：

- `evals/WebVoyager_data.jsonl:428,527` 与 `evals/WebVoyager_reference.json:2190`：评测中的邮箱/密码形态；未认定为本用户的私密信息，也未在核实前标为安全。
- `evals/WebVoyager_reference.json:780`：作者邮箱答案；`:2980`：高熵字符串，结合 `evals/WebVoyager_data.jsonl:582` 上下文归类为数据集名称答案。
- `.env.example:3,6,7,8,9,12,15`：空 API Key；`:17,18,19`：已标为公开演示值，样例文件引用失效。
- `.github/workflows/claude.yml:37`：Secret 名称引用，未包含 Secret 值。
- `src/cli/index.ts:109`：密码进入 action message 的运行时路径。
- `src/agent/mcp/client.ts:49`：完整 SSE URL 调试输出路径。
- `src/agent/shared/action-cache.ts` 与 `src/agent/tools/agent.ts`：参数、DOM、模型消息及可选截图记录路径；当前没有实际运行数据被跟踪。
- `LICENSE:4`：现有上游版权声明必须保留；补全许可文本、标识及修改说明的任务仍待处理。

## 证据基线

全部 152 个原有文件的 SHA-256、大小、文本行数、品牌命中行号，以及 20 项本地功能结果与 Lint 诊断，保存在 [public-release-baseline.json](public-release-baseline.json)。未包含原始敏感值、图像帧、模型消息或实际用户缓存。
