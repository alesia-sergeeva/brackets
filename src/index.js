module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;
    let arr = [];
    let regexp;
    let screen = "[]\^$.|?*+()"
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (screen.includes(bracketsConfig[i][0])) {
            arr.push(`\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}`);
        } else {
            arr.push(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`);
        }
        regexp = new RegExp(arr.join("|"));
    }
    while (regexp.test(str)) {
        str = str.replace(regexp, "");
    }
    return str.length === 0;
}
