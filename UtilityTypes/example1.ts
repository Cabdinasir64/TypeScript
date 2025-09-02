interface User {
    id: number;
    name: string;
    email: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
}

type UpdateSetting = {
    darkMode: boolean;
    fontSize: number;
    language: string;
}

function updateSettings(current: UpdateSetting, updates: Partial<UpdateSetting>) {
    let NewArray: (UpdateSetting | Partial<UpdateSetting>)[] = [current, updates];
    return NewArray;

}

class UserProfile {
    constructor(public id: number, public name: string, public email: string) { }

    update(data: Partial<UserProfile>) {
        const updated = { ...this, ...data };
        this.id = updated.id;
        this.name = updated.name;
        this.email = updated.email;
    }
}

const userUpdate1: Partial<User> = {
    name: "Abdinasir"
};
console.log("userUpdate1:", userUpdate1);

const userUpdate2: Partial<User> = {
    email: "abdinasir@mail.com"
};
console.log("userUpdate2:", userUpdate2);

const settings = { darkMode: false, fontSize: 14, language: "en" };
const settings2 = { darkMode: true, fontSize: 23, language: "AR" };
const newSettings = updateSettings(settings, { darkMode: true });
const newSettings2 = updateSettings(settings, { fontSize: 16, language: "fr" });
const newSettings3 = updateSettings(settings2, { darkMode: false });
console.log("Setting1 before update:", settings);
console.log("Setting2 before update:", settings2);
console.log("newSettings after update1:", newSettings);
console.log("newSettings after update2:", newSettings2);
console.log("newSettings3 after update1:", newSettings3);


const userProfile = new UserProfile(1, "Abdinasir", "example@mail.com");
console.log("userProfile before update:", userProfile);
userProfile.update({ name: "Abdi" });
console.log("afterupdate:", userProfile);

const productUpdate: Partial<Product> = {
    price: 19.99
};
console.log("productUpdate:", productUpdate);

const realObjectUpdate: Partial<{ title: string; completed: boolean }> = {
    completed: true
};
console.log("realObjectUpdate:", realObjectUpdate);
