export const getDifficultyBadgeClass = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case "easy":
      return "text-easy bg-easy/10";
    case "medium":
      return "text-medium bg-medium/10";
    case "hard":
      return "text-hard bg-hard/10";
    default:
      return "text-lc-text-secondary bg-lc-layer-2";
  }
};