class THashStorage {
    constructor() {
        this.storage = {};
    }

    addValue(key, value) {
        this.storage[key] = value;
        console.log(`Компания "${key}" добавлена.`);
    }

    deleteValue(key) {
        if(this.storage.hasOwnProperty(key)) {
            delete this.storage[key];
            console.log(`Компания "${key}" удалена.`)
        } else {
            console.log(`Компания "${key}" не найдена.`);
        }
    }

    getValueInfo(key) {
        if (this.storage.hasOwnProperty(key)) {
            return `Компания: ${key}, Описание: ${this.storage[key]}`;
        } else {
            return "Нет информации";
        }
    }

    listValues() {
        let result = "";
        for (let key in this.storage) {
            result += `Компания: ${key}, Описание: ${this.storage[key]}\n`;
        }
        return result || "Нет информации";
    }
}

class TLocalStorage {
    AddValue(key, value) {
        localStorage.setItem(key, value);
        console.log(`Пара "${key}: ${value}" добавлена в локальное хранилище.`);
    }

    GetValue(key) {
        return localStorage.getItem(key);
    }

    DeleteValue(key) {
        localStorage.removeItem(key);
        console.log(`Пара с ключом "${key}" удалена из локального хранилища.`);
    }

    GetKeys() {
        return Object.keys(localStorage);
    }

}


const aviaCompanyStorage = new THashStorage();
let localStorageHandler = new TLocalStorage();


function Add() {
    let key = prompt("Введите название компании:");
    let value = prompt("Введите описание компании:");

    if (key === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }

    if (value == null) {
        alert("Вы отказались делать ввод информации о компании.");
        return;
    }

    aviaCompanyStorage.addValue(key, value);
    localStorageHandler.AddValue(key, value);
}


function Delete() {
    let key = prompt("Введите название компании для удаления:");

    if (key === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }

    aviaCompanyStorage.deleteValue(key);
    localStorageHandler.DeleteValue(key);
}


function GetInfo() {
    let key = prompt("Введите название компании для получения информации:");

    if (key === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }

    console.log(aviaCompanyStorage.getValueInfo(key));
    let localInfo = localStorageHandler.GetValue(key);
    console.log("Компания: " + key + " Описание: "+ localInfo);
}


function ListAll() {
    console.log(aviaCompanyStorage.listValues());
    
    const localKeys = localStorageHandler.GetKeys();
    if (localKeys.length > 0) {
        localKeys.forEach(key => {
            console.log(`Локальное хранилище - Компания: ${key}, Описание: ${localStorageHandler.GetValue(key)}`);
        });
    } else {
        console.log("Нет информации в локальном хранилище");
    }
}
