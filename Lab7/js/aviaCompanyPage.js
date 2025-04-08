function loadAviaCompanyPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Авиакомпании</h1>
        <input type="button" value="Добавить" onclick="addCompany()">
        <input type="button" value="Удалить" onclick="deleteCompany()">
        <input type="button" value="Получить информацию" onclick="getCompanyInfo()">
        <input type="button" value="Список всех" onclick="listCompanies()">
    `;
}

let companyData = {};

function addCompany() {
    const name = prompt("Введите название компании:");
    if (name === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }

    const description = prompt("Введите описание:");
    if (description == null) {
        alert("Вы отказались делать ввод информации о компании.");
        return;
    }

    if(name && description) {
        companyData[name] = description;
        console.log(`Компания "${name}" добавлена.`)
    }
}

function deleteCompany() {
    const name = prompt("Введите назвние компании для удаления:");
    if (name === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }

    if(name && companyData[name]) {
        delete companyData[name];
        console.log(`Компания "${name}" удалена.`)
    } else {
        showMessage("Компания не найдена.");
    }
}

function getCompanyInfo() {
    const name = prompt("Введите назвние компании:");
    if (name === null) {
        alert("Вы отказались делать ввод названия компании.");
        return;
    }
    if (name && companyData[name]) {
        console.log(`Компания: ${name}, Описание: ${companyData[name]}`);
    } else {
        showMessage("Информация не найдена.");
    }
}

function listCompanies() {
    let result = "";
    for (let key in companyData) {
        result += `Компания: ${key}, Описание: ${companyData[key]}\n`;
    }
    console.log(result || "Нет информации");
}

function showMessage(text) {
    document.getElementById("output").textContent = text;
}