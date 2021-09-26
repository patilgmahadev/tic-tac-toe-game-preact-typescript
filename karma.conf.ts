// Karma configuration
// See http://karma-runner.github.io/6.3/config/configuration-file.html

module.exports = config => {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    frameworks: ["mocha", "parcel"],
    files: [
      {
        pattern: "./src/**/*-test.ts",
        watched: false,
        included: false,
        served: false
      },
      {
        pattern: "./src/**/*-test.tsx",
        watched: false,
        included: false,
        served: false
      }
    ],
    exclude: [],
    browserDisconnectTolerance: 3,
    preprocessors: {
      "**/*-test.ts": ["parcel"],
      "**/*-test.tsx": ["parcel"]
    },
    reporters: ["dots"],
    mochaReporter: {
      output: "minimal",
      showDiff: true,
      printFirstSuccess: true
    },
    summaryReporter: {
      show: "all",
      specLength: 100,
      overviewColumn: false
    },
    port: 9876,
    colors: true,
    autoWatch: false,
    autoWatchBatchDelay: 500,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-parcel"),
      require("karma-mocha-reporter")
    ]
  });
};
