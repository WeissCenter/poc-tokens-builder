
// import all JSON includes for Flutter
// const spacing = require("./includes/spacing.json");
// const sizing = require("./includes/sizing.json");
// const borderRadius = require("./includes/borderRadius.json");
// const boxShadow = require("./includes/boxShadow.json");
// const colors = require("./includes/colors.json");
// const opacity = require("./includes/opacity.json");
// const fontFamilies = require("./includes/fontFamilies.json");
// const lineHeights = require("./includes/lineHeights.json");
// const letterSpacing = require("./includes/letterSpacing.json");
// const paragraphSpacing = require("./includes/paragraphSpacing.json");
// const fontWeights = require("./includes/fontWeights.json");
// const fontSizes = require("./includes/fontSizes.json");
// const textTheme = require("./includes/textTheme.json");
// const colorScheme = require("./includes/colorScheme.json");
// const light = require("./includes/themes/themeLight.json");
// const dark = require("./includes/themes/themeDark.json");

const neutral = require("./includes/colors/black-white.json");
const blueCool = require("./includes/colors/blue-cool.json");
const blueWarm = require("./includes/colors/blue-warm.json");
const blue = require("./includes/colors/blue.json");
const cyan = require("./includes/colors/cyan.json");
const gold = require("./includes/colors/gold.json");
const grayCool = require("./includes/colors/gray-cool.json");
const grayWarm = require("./includes/colors/gray-warm.json");
const gray = require("./includes/colors/gray.json");
const greenCool = require("./includes/colors/green-cool.json");
const greenWarm = require("./includes/colors/green-warm.json");
const green = require("./includes/colors/green.json");
const indigoCool = require("./includes/colors/indigo-cool.json");
const indigoWarm = require("./includes/colors/indigo-warm.json");
const indigo = require("./includes/colors/indigo.json");
const magenta = require("./includes/colors/magenta.json");
const mintCool = require("./includes/colors/mint-cool.json");
const mint = require("./includes/colors/mint.json");
const orangeWarm = require("./includes/colors/orange-warm.json");
const orange = require("./includes/colors/orange.json");
const redCool = require("./includes/colors/red-cool.json");
const redWarm = require("./includes/colors/red-warm.json");
const red = require("./includes/colors/red.json");
const violetWarm = require("./includes/colors/violet-warm.json");
const violet = require("./includes/colors/violet.json");
const yellow = require("./includes/colors/yellow.json");

const colors = {
    neutral,
    "blue-cool" : blueCool,
    "blue-warm" : blueWarm,
    blue,
    cyan,
    gold,
    "gray-cool" : grayCool,
    "gray-warm" : grayWarm,
    gray,
    "green-cool" : greenCool,
    "green-warm" : greenWarm,
    green,
    "indigo-cool" : indigoCool,
    "indigo-warm" : indigoWarm,
    indigo,
    magenta,
    "mint-cool" : mintCool,
    mint,
    "orange-warm" : orangeWarm,
    orange,
    "red-cool" : redCool,
    "red-warm" : redWarm,
    red,
    "violet-warm" : violetWarm,
    violet,
    yellow
}

// console.log(colors)

// Set the order of how the JSON nodes will be exported

const includes = {
    // spacing,
    // sizing,
    // borderRadius,
    // boxShadow,
    colors,
    // opacity,
    // fontFamilies,
    // lineHeights,
    // letterSpacing,
    // paragraphSpacing,
    // fontWeights,
    // fontSizes,
    // textTheme,
    // colorScheme,
}
  
// module.exports = {
//     core: includes,
//     light,
//     dark
// }

module.exports = includes