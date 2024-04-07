module.exports = {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
        "nativewind/babel",
        [
            "module-resolver",
            {
                alias: {
                    "@src": "./src",
                    // "@components": "./src/components",
                    // "@screen": "./src/screen",
                    // "@utils": "./src/utils",
                },
            },
        ],
    ],
};
