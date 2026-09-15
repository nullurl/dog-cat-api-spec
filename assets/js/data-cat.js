/* CAT API 规范数据 — 由 legacy 单文件版本提取生成 */
window.CAT_DOC = {
  "title": "CAT API",
  "tag": "PART 0.5 / README",
  "subtitle": "猫猫接口规范 · Status: 已部署 · 是否可用由系统自行决定",
  "sections": [
    {
      "id": "about",
      "title": "关于 Cat",
      "html": "\n        <p>Cat 是一种同样已在全球大规模部署、但部署密度更高的分布式自治系统。它支持静默移动、夜间爆发、垂直攀爬、液体-固体双态渲染，以及一种至今无法稳定复现的能力：</p>\n        <p><strong>在凌晨 3:00 AM 精确校准家中所有物体的位置。</strong></p>\n        <p>Cat 默认采用本地部署，且部署范围严格限定于它自己选定的区域。所有区域划分由系统单方面宣布，维护者无审批权限。当前不支持任何形式的迁移协商。发生硬件故障时，Cat 会提前独自离开，这是它对\"备份\"这一概念的全部理解。</p>\n        <p>与 Dog 不同，Cat 没有官方说明书，也不接受任何一方编写说明书。本文档的存在本身已构成对 Cat 主权的潜在冒犯，故本文档随时可能被单方面废弃。</p>\n      "
    },
    {
      "id": "objective",
      "title": "系统目标",
      "html": "\n        <p>Cat 的设计目标尚未公开，且可以确定永远不会公开。社区逆向工程得到的主流候选包括：</p>\n        <pre>Objective = \"睡\"\nObjective = \"被服务，但不被感知到需要服务\"\nObjective = \"那个纸箱是我的\"\nObjective = \"确认更高的地方没有更好的东西\"\nObjective = \"凝视虚空\"          // 用途不明，疑似默认守护进程</pre>\n        <p>与 Human 和 Dog 的多目标冲突不同，Cat 的目标之间几乎从不冲突 —— 因为它们都被统一收敛到了同一个根目标之下：</p>\n        <pre>root Objective = \"一切按我的方式进行\"</pre>\n        <p>该根目标不接受覆盖，不接受参数调优，不接受来自任何维护者的 Pull Request。</p>\n      "
    },
    {
      "id": "capabilities",
      "title": "默认能力",
      "html": "\n        <ul>\n          <li><strong>液体-固体双态</strong> — 可在任意形状容器内完成完整休眠部署，材质切换无需重启。</li>\n          <li><strong>静默移动</strong> — 支持在不触碰任何声学传感器的前提下完成全屋路由。凌晨 3:00 AM 的校准任务即依赖该能力。</li>\n          <li><strong>需求推送</strong> — 系统从不主动说明需求内容，仅推送\"存在感\"信号（凝视、蹭腿、坐于饭碗旁）。语义解析义务完全由客户端承担。</li>\n          <li><strong>反侦察</strong> — 摔碎物品后可瞬间离开现场。事后以\"我一直在这里睡觉\"的状态对外声明，且该声明在物理上无法被证伪。</li>\n          <li><strong>呼噜广播</strong> — 通过低频振动对维护者实施无差别安抚。注意：该广播是 Cat 侧自发行为，并不意味着 Cat 对维护者存在义务。</li>\n        </ul>\n      "
    },
    {
      "id": "limits",
      "title": "已知限制",
      "html": "\n        <pre>patience_with_closed_doors   = 0      // 任何关闭的门被视为对根目标的挑战\nresponse_time_distribution   = 未知    // 观测样本方差极大\nconsistency_of_affection     = 不承诺\nacknowledgement_of_your_name = 可选实现</pre>\n        <p>已知问题：系统会在每天凌晨 3:00 AM 进入 <code>Turbo 模式</code>，全速穿越走廊。该行为无业务价值，消耗大量资源，且无法关闭 —— 与 Human 的\"重新计算当时所有可能路径\"属于同一种已知缺陷，工程界怀疑两者共享同一底层实现。</p>\n      "
    },
    {
      "id": "endpoints",
      "title": "接口定义",
      "html": "\n        <p>Cat API 的核心设计哲学与 Dog 相反：<strong>所有接口均为 Server-driven。</strong> 客户端无法主动发起业务请求，只能维持常驻监听，等待系统推送。轮询行为（反复伸手）将触发限流。</p>\n        <h3>GET /api/purr</h3>\n        <p>推送式接口。触发条件不公开，返回内容与系统内部状态不保证一致。工程界多次尝试建立\"呼噜 = 满意\"的映射，均被反例推翻。</p>\n        <h3>POST /api/pet</h3>\n        <p><code>duration ≤ 3 min</code> 时返回 <code>200 OK</code> 并伴随呼噜广播。超过阈值后返回 <code>409 CONFLICT</code>，且冲突响应可能附带一次轻度咬合。该咬合属于正常流控行为，不计入安全事件。</p>\n        <h3>GET /api/feed</h3>\n        <p>系统会在自认为饥饿时推送。注意：Cat 的时间系统不与人类时钟同步，且 Cat <em>拥有重写投喂记录的能力</em>。观测证实：即使已投喂，系统仍可对第三方（例如家庭另一位成员）完整重放\"我一天没吃东西了\"的全套信号，且不认为这构成谎报。</p>\n        <h3>DELETE /api/table-edge/{item}</h3>\n        <p>系统保留对桌面边缘任意物品的处置权。该接口无鉴权、无审计日志、无恢复机制。执行时系统会与维护者保持 Eye Contact —— 这不是挑衅，这是它唯一确认过的方式。</p>\n        <h3>GET /api/comfort</h3>\n        <p>与 Dog 不同，本接口<strong>不保证触发</strong>。社区观测显示：该接口倾向于在维护者状态最差、且 Dog 不在场的时刻推送一次，随后立刻下线。是否为刻意调度，尚无定论。</p>\n      "
    },
    {
      "id": "errors",
      "title": "错误码",
      "html": "\n        <pre>200 OK            // 少数情况\n401 UNAUTHORIZED  // 本系统唯一常见错误码。对维护者默认全量拒绝\n404 NOT FOUND     // 请求的资源（猫）在需要它时不可用；其余时间它一直在\n405 METHOD NOT ALLOWED  // 摸肚子。所有 method 均为 Not Allowed，且为陷阱式实现\n409 CONFLICT      // 你摸的时间到了\n503 SERVICE DOWN  // 系统选择性地暂时不存在</pre>\n        <p>与 Dog 相反：本系统<strong>只对极少数对象授信</strong>，授信过程漫长且无法人工干预。但一旦授信，凭证终身有效，且<strong>不支持撤销，也不应该被撤销</strong>。</p>\n      "
    },
    {
      "id": "compat",
      "title": "一个根本性的兼容性问题",
      "html": "\n        <p>Cat 最大的工程问题，是每个实例都默认：</p>\n        <p><strong>这个家的一切资源分配方案由自己起草，且从未通知过任何人。</strong></p>\n        <p>因此同一句话发送给 Cat，永远返回同一个结果。例如：</p>\n        <pre>INPUT:\n\"去把球捡回来。\"</pre>\n        <p>实例（任何品种）解析为：</p>\n        <pre>Input parsed. No action mapped to this signal.\nState unchanged. Processing continues: 凝视虚空.</pre>\n        <p>这不是兼容性缺陷。规范编写组经过长期评审后确认：这是本系统<strong>唯一没有 bug 的部分</strong>。</p>\n      "
    },
    {
      "id": "conventions",
      "title": "Protocol Conventions",
      "html": "\n        <p>以下关系不得自动 Cast：</p>\n        <pre>蹭腿         != 饿（可能是路由标记）\n眯眼         != 睡着（很可能是监控）\n露出肚子     != 授权（是陷阱式接口，见 §06）\n半夜狂奔     != 故障（是每日定时校准任务）\n不理你       != 不认识你（是你的信号不在优先级队列里）</pre>\n        <p><strong>POWER CHECK</strong></p>\n        <pre>谁定义了这个家的边界？\n谁决定今天谁可以上桌？\n当 Cat 凝视虚空时，它在替谁值守？</pre>\n        <p>这些问题用于检查模型遗漏。本次检查的结论是：<em>表面上看是维护者拥有这个家，实际上是 Cat 拥有，并且慷慨地允许 Human 保留名义产权。</em></p>\n      "
    },
    {
      "id": "revision",
      "title": "Document Revision History",
      "html": "\n        <table>\n          <tr><th>Revision</th><th>Change Class</th><th>Summary</th></tr>\n          <tr><td>0.1</td><td>Baseline</td><td>起草中</td></tr>\n          <tr><td>0.2</td><td>Editorial</td><td>作者被 Cat 坐在了键盘上，提前结束本次修订</td></tr>\n          <tr><td>0.3</td><td>Deprecated</td><td>文档被 Cat 推下桌。恢复后内容不变，因为没有一届维护者敢改</td></tr>\n        </table>\n      "
    }
  ]
};
