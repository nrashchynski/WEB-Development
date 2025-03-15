function createForm(formArray, formID) {
    let form = document.getElementById(formID);

    formArray.forEach(field => {
        let fieldWrapper = document.createElement("div");

        if (field.elemtype !== "button") {
            let label = document.createElement("label");
            label.textContent = field.label;
            label.htmlFor = field.name;   // привязывает label к input
            fieldWrapper.appendChild(label);
        }

        let input;
        if (field.elemtype === "text" || field.elemtype === "number") {
            input = document.createElement("input");
            input.type = field.elemtype;
            input.name = field.name;
            if (field.required) input.setAttribute("required", "true");
            if (field.min) input.setAttribute("min", field.min);
            input.addEventListener("input", () => validateField(input));
        } 
        else if (field.elemtype === "checkbox") {
            input = document.createElement("input");
            input.type = "checkbox";
            input.name = field.name;
        } 
        else if (field.elemtype === "button") {
            input = document.createElement("button");
            input.type = "button";
            input.textContent = field.value;
            input.addEventListener("click", validateForm);
        }

        fieldWrapper.appendChild(input);
        
        if (field.required) {
            let errorSpan = document.createElement("span");
            errorSpan.className = "error";
            errorSpan.id = "error-" + field.name;
            fieldWrapper.appendChild(errorSpan);
        }

        form.appendChild(fieldWrapper);
    });
}

var FormA = [
    {label: 'Название компании:', elemtype: 'text', name: 'company', required:'true'},
    {label: 'Год основания:', elemtype: 'number', name: 'year', required:'true', min: 1900}, 
    {label: 'Страна:', elemtype: 'text', name:'country', required:true},
    {label: 'Количество самолетов:', elemtype:'number', name:'planes', required: true, min: 1},
    {label: 'Разрешить отзывы:', elemtype: 'checkbox', name:'enablecomments'},
    {label: 'Отправить:', elemtype: 'button', value: 'Добавить' }
];

// label: текстовая подпись перед полем ввода
// name: (для input и checkbox) уникальное имя поля
// value: (только для button) текст который будет написан на кнопке

function validateField(input) {
    let errorSpan = document.getElementById("error-" + input.name);
    let value = input.value.trim();

    if (!value) {
        errorSpan.textContent = "Поле обязательно!";
    }
    else if(input.type === "number" && input.min && value < input.min) {
        errorSpan.textContent = `Минимальное значение: ${input.min}`;
    }
    else {
        errorSpan.textContent = "";
    }
}

function validateForm() {
    let form = document.getElementById("avia-form");
    let isValid = true;


    form.querySelectorAll("input[required]").forEach(input => {   // нахоит все поля которые нельзя оставлять пустыми
        validateField(input);
        if (document.getElementById("error-" + input.name).textContent !== "") {
            isValid = false;
        }
    });

    if (isValid) {
        alert("Форма успешно отправлена!");
    } else {
        alert("Исправьте ошибки перед отправкой!");
    }
}

createForm(FormA, "avia-form");