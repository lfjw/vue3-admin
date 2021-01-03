module.exports = {
  "hooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS", // 验证git提交信息
    "pre-commit": "lint-staged"
  }
}