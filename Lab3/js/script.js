let aviaCompanyHash = {};

function AddValue(key, value) {
    aviaCompanyHash[key] = value;
    console.log(`Компания "${key}" добавлена.`);
}

function DeleteValue(key) {
    if (aviaCompanyHash.hasOwnProperty(key)) {
        delete aviaCompanyHash[key];
        console.log(`Компания "${key}" удалена.`);
    } else {
        console.log(`Компания "${key}" не найдена.`);
    }
}

function GetValueInfo(key) {
    if (aviaCompanyHash.hasOwnProperty(key)) {
        return `Компания: ${key}, Описание: ${aviaCompanyHash[key]}`;
    } else {
        return "Нет информации";
    }
}

function ListValues() {
    let result = "";
    for (let key in aviaCompanyHash) {
        result += `Компания: ${key}, Описание: ${aviaCompanyHash[key]}\n`;
    }
    return result || "Нет информации";
}

function Add() {
    let key = prompt("Введите название компании:");
    let value = prompt("Введите описание компании:");
    if (key === null) {
        alert("Вы отказались делать ввод информации о компании.");
        return;  
    }
    AddValue(key, value);
}

function Delete() {
    let key = prompt("Введите название компании для удаления:");
    if (key === null) {
        alert("Вы отказались делать ввод информации о компании."); 
        return;
    }
    DeleteValue(key);
}

function GetInfo() {
    let key = prompt("Введите название компании для получения информации:");
    if (key === null) {
        alert("Вы отказались делать ввод информации о компании."); 
        return;
    }
    console.log(GetValueInfo(key));
}

function ListAll() {
    console.log(ListValues());
}