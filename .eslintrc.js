module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-console": "off",
        "max-len": [
            "error",
            {
                "code": 120,
                "ignoreStrings": true,
                "ignoreUrls": true,
                "ignoreTemplateLiterals": true
            }
        ],
        "no-param-reassign": [
            "error",
            {
                "props" : false
            }
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "semi": "off",
        "template-curly-spacing": ["error"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }]
    }
};