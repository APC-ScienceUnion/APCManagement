/**
 * ============================================
 *   A.P.C.科普组 工作安排配置文件
 *
 *   所有人员统一放在 members 数组中，
 *   通过 role 字段区分：主笔 / 审核
 *   可在设置面板中随时切换，切换后数据保留
 *
 *   avatar 使用图片链接，可替换为实际头像URL
 * ============================================
 */

const CONFIG = {
  members: [
    /* ---- 主笔 ---- */
    {
      name: "陈思远",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChenSiyuan",
      color: "#3B82F6",
      role: "主笔",
      target: 8,            // 任务指标（仅主笔）
      completed: 5,         // 已完成
      deduction: 1,         // 抵扣指标（2抵扣=1任务，仅主笔）
      leaves: []            // 请假记录（仅审核展示）
    },
    {
      name: "林小雨",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LinXiaoyu",
      color: "#0EA5E9",
      role: "主笔",
      target: 6,
      completed: 6,
      deduction: 0,
      leaves: []
    },
    {
      name: "张文博",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangWenbo",
      color: "#10B981",
      role: "主笔",
      target: 10,
      completed: 3,
      deduction: 2,
      leaves: []
    },
    {
      name: "王诗涵",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WangShihan",
      color: "#F59E0B",
      role: "主笔",
      target: 7,
      completed: 4,
      deduction: 1,
      leaves: []
    },
    {
      name: "刘子轩",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiuZixuan",
      color: "#EC4899",
      role: "主笔",
      target: 8,
      completed: 7,
      deduction: 0,
      leaves: []
    },

    /* ---- 审核 ---- */
    {
      name: "赵雅琪",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ZhaoYaqi",
      color: "#60A5FA",
      role: "审核",
      target: 0,
      completed: 12,
      deduction: 0,
      leaves: [
        { date: "2026-01-15", reason: "期末考试复习，需要集中精力备考" },
        { date: "2026-02-03", reason: "感冒发烧，身体不适" }
      ]
    },
    {
      name: "孙浩然",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SunHaoran",
      color: "#38BDF8",
      role: "审核",
      target: 0,
      completed: 10,
      deduction: 0,
      leaves: [
        { date: "2026-01-28", reason: "代表学校参加物理学术竞赛" }
      ]
    },
    {
      name: "周梦洁",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ZhouMengjie",
      color: "#34D399",
      role: "审核",
      target: 0,
      completed: 15,
      deduction: 0,
      leaves: []
    },
    {
      name: "吴天宇",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WuTianyu",
      color: "#FB923C",
      role: "审核",
      target: 0,
      completed: 8,
      deduction: 0,
      leaves: [
        { date: "2026-02-01", reason: "家中有事，需要回老家" },
        { date: "2026-02-08", reason: "肠胃炎，医生建议休息" },
        { date: "2026-02-12", reason: "参加校团委志愿者活动" }
      ]
    },
    {
      name: "郑可馨",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ZhengKexin",
      color: "#F472B6",
      role: "审核",
      target: 0,
      completed: 11,
      deduction: 0,
      leaves: [
        { date: "2026-02-10", reason: "学校辩论赛时间冲突" }
      ]
    }
  ],

  /** 当前轮班审核人 —— 指向 members 数组索引，必须是 role="审核" */
  currentReviewerIndex: 5   // 赵雅琪
};
