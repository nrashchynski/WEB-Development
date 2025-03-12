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

const aviaCompanyStorage = new THashStorage();

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
}

function Delete() {
    let key = prompt("Введите название компании для удаления:");
    if (key === null) {
        alert("Вы отказались делать ввод информации о компании.");
        return;
    }
    aviaCompanyStorage.deleteValue(key);
}

function GetInfo() {
    let key = prompt("Введите название компании для получения информации:");
    if (key === null) {
        alert("Вы отказались делать ввод информации о компании.");
        return;
    }
    console.log(aviaCompanyStorage.getValueInfo(key));
}

function ListAll() {
    console.log(aviaCompanyStorage.listValues());
}
