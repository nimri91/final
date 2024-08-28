const { defineConfig } = require("cypress");

import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
// @ts-ignore
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin")
const readXlsx = require('cypress/support/read_xlsx')

module.exports = defineConfig({
    env: {
        allureAddVideoOnPass: true,
        allureLogGherkin: true,
        allureLogCypress: true,
        allure: true
    },
    e2e: {
        projectId: "xxxxx",
        baseUrl: 'http://localhost:3000',
        viewportWidth: 1920,
        viewportHeight: 1080,
        specPattern: "**/features/smoke_suite/payroll/manage_airticket_transactions.feature",
        scrollBehavior: 'center',
        defaultCommandTimeout: 10000,
        "video" : true,
        downloadsFolder: 'cypress/downloads',
        chromeWebSecurity: false,
        // experimentalSessionAndOrigin: true,
        pageLoadTimeout: 2000,
        browsers: [
            {
                name: 'chrome-macos',
                family: 'chromium',
                channel: 'stable',
                displayName: 'Chrome',
                version: '103.0.5060.134',
                path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                minSupportedVersion: 64,
                majorVersion: 103,
                pageLoadTimeout: 1000 * 180,
            }
        ],
        setupNodeEvents: async function(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                browserify(config, {
                    typescript: require.resolve("typescript"),
                })
            )
            on('task', {
                log (message) {
                    console.log(message)
                    return null
                },
                downloadFile,
                readXlsx: readXlsx.read,
                readDir: readXlsx.readDir,
                getFileSize: readXlsx.getFileSize,
                getLastDownloadedFilePath: readXlsx.getLastDownloadedFilePath
            })
            configureAllureAdapterPlugins(on, config);
            return config;
        },
    },
});
