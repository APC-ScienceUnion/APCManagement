/**
 * ============================================
 *   A.P.C.科普组 工作安排配置文件（默认数据）
 *
 *   仅作为首次访问时的初始数据。
 *   用户后续的所有修改都保存在 localStorage 中。
 *
 *   role: 主笔 / 审核
 *   avatar: 图片链接，可替换为实际头像URL
 * ============================================
 */

const CONFIG = {
  members: [
    {
      name: "示例人员",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ExampleWriter",
      color: "#3B82F6",
      role: "主笔",
      target: 8,
      completed: 0,
      deduction: 0,
      leaves: []
    },
    {
      name: "示例人员",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ExampleReviewer",
      color: "#10B981",
      role: "审核",
      target: 0,
      completed: 0,
      deduction: 0,
      leaves: []
    }
  ],

  currentReviewerIndex: 1
};
