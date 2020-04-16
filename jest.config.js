module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["<rootDir>/src/components/**/*.spec.{j,t}s?(x)"],
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    // process `*.ts` files with `ts-jest`
    "^.+\\.tsx?$": "ts-jest"
  }
};
