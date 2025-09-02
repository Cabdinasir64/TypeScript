var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateSettings(current, updates) {
    var NewArray = [current, updates];
    return NewArray;
}
var UserProfile = /** @class */ (function () {
    function UserProfile(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    UserProfile.prototype.update = function (data) {
        var updated = __assign(__assign({}, this), data);
        this.id = updated.id;
        this.name = updated.name;
        this.email = updated.email;
    };
    return UserProfile;
}());
var userUpdate1 = {
    name: "Abdinasir"
};
console.log("userUpdate1:", userUpdate1);
var userUpdate2 = {
    email: "abdinasir@mail.com"
};
console.log("userUpdate2:", userUpdate2);
var settings = { darkMode: false, fontSize: 14, language: "en" };
var settings2 = { darkMode: true, fontSize: 23, language: "AR" };
var newSettings = updateSettings(settings, { darkMode: true });
var newSettings2 = updateSettings(settings, { fontSize: 16, language: "fr" });
var newSettings3 = updateSettings(settings2, { darkMode: false });
console.log("Setting1 before update:", settings);
console.log("Setting2 before update:", settings2);
console.log("newSettings after update1:", newSettings);
console.log("newSettings after update2:", newSettings2);
console.log("newSettings3 after update1:", newSettings3);
var userProfile = new UserProfile(1, "Abdinasir", "example@mail.com");
console.log("userProfile before update:", userProfile);
userProfile.update({ name: "Abdi" });
console.log("afterupdate:", userProfile);
var productUpdate = {
    price: 19.99
};
console.log("productUpdate:", productUpdate);
var realObjectUpdate = {
    completed: true
};
console.log("realObjectUpdate:", realObjectUpdate);
