var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import path from 'path';
function getPathDirname() {
    var entry = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        entry[_i] = arguments[_i];
    }
    return path.resolve.apply(path, __spreadArray([__dirname, "../", "../"], entry, false));
}
export default getPathDirname;
