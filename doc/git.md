# git 提交规范

- 参考地址：`https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional`

## 1. 安装依赖

```sh
npm install --save-dev husky
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

## 2. 配置

```sh
# .commitlintrc.js or commitlint.config.js
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

在 husky 的配置加入 `CommitlIint` 配置，`v1.0.1` 版本以后为 `HUSKY_GIT_PARAMS`，`v0.14.3` 为 `GIT_PARAMS`

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
  }
},
```

## 3. 规范

### 3.1 提交格式

```sh
git commit -m <type>[optional scope]: <description>

# eg
# git commit -m 'feat: 增加 xxx 功能'
# git commit -m 'bug: 修复 xxx 功能'
```

- type ：`用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？有11种类型`
- optional scope：`一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块`
- description：`一句话描述此次提交的主要内容，做到言简意赅`

### 3.2 type 类别

- build：`主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交`
- ci：`主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交`
- docs：`文档更新`
- feat：`新增功能`
- fix：`bug 修复`
- perf：`性能优化`
- refactor：`重构代码(既没有新增功能，也没有修复 bug)`
- style：`不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)`
- test：`新增测试用例或是更新现有测试`
- revert：`回滚某个更早之前的提交`
- chore：`不属于以上类型的其他类型(日常事务)`

### 3.3 subject

subject 是 commit 目的的简短描述，可以做一些配置，如最大长度限制。

## 4. commitlint.config.js 文件配置

rule 配置说明:

- rule 由 name 和配置数组组成，如：`'name:[0, 'always', 72]'`，
- 数组中第一位为`level`，可选`0`,`1`,`2`，`0`为` disable``无效 `，`1`为` warning``警告 `，`2`为` error``异常 `，
- 第二位为应用` 与``否 `，可选`always`|`never`，
- 第三位该 rule 的值。具体配置例子如下：

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // type类型
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
```
