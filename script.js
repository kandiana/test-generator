var maxSquareRoot = 30;
var maxCubeRoot = 10;
var maxCoefficient = 10;
var numberOfQuestions = 10;
var numberOfQuestionVariations = 52;
var alphabet = 'acdefghkmnpqrstuvwxyz';

var rightAnswers = new Array(numberOfQuestions)

// special symbols

var middot = '&#183';
var square = '&#178';

// squares

function calculateNumberSquareOrCube(i, unusedNumbersForSquares, unusedNumbersForCubes) {
    var questionLine = document.createElement("div");
    questionLine.id = `question-${i}`;
    questionLine.classList.add("question_small");

    var check = Math.floor(Math.random() * 4);
    var k, root;
    if (check < 2) {
        k = Math.floor(Math.random() * unusedNumbersForSquares.length);
        root = unusedNumbersForSquares[k];
        unusedNumbersForSquares.splice(k, 1);
    }
    else {
        k = Math.floor(Math.random() * unusedNumbersForCubes.length);
        root = unusedNumbersForCubes[k];
        unusedNumbersForCubes.splice(k, 1);
    }

    switch (check) {
        case 0:
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите число, квадрат которого равен ${root * root}.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`
            rightAnswers[i] = root;
            break;
        case 1:
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите квадрат числа ${root}.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`
            rightAnswers[i] = root * root;
            break;
        case 2:
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите число, куб которого равен ${root * root * root}.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`
            rightAnswers[i] = root;
            break;
        case 3:
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите куб числа ${root}.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`
            rightAnswers[i] = root * root * root;
            break;
    }

    return questionLine;
}

function trainAMF(i, unusedQuestions) {
    var questionLine = document.createElement("div");
    questionLine.id = `question-${i}`;
    questionLine.classList.add("question_large");

    var check, k;
    k = Math.floor(Math.random() * unusedQuestions.length);
    check = unusedQuestions[k];
    unusedQuestions.splice(k, 1);

    var a, b;
    a = Math.ceil(Math.random() * maxCoefficient);
    b = Math.ceil(Math.random() * maxSquareRoot);

    var letter;
    letter = alphabet[Math.floor(Math.random() * alphabet.length)];

    var eq;

    switch (check) {
        // find b so that equation is true
        case 0:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;${a}${middot}(${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 1:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;-&nbsp;b)${square}`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;${a}${middot}(${letter}&nbsp;-&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 2:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${a}${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 3:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;-&nbsp;b)${square}`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${a}${letter}&nbsp;-&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 4:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `-${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;-${a}${middot}(${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 5:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;-&nbsp;b)${square}`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;-${a}${middot}(${letter}&nbsp;-&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 6:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `-${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${a}${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 7:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;-&nbsp;b)${square}`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;(${a}${letter}&nbsp;-&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 8:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;${a}${middot}(${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 9:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;-${a}${middot}(${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 10:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;(${a}${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 11:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b} = -(${letter}&nbsp;+&nbsp;b)${square}`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;(${a}${letter}&nbsp;+&nbsp;b)${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Найдите значение <b>b</b>, при котором выполняется равенство: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;

        // solve equation
        case 12:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 13:
            b = b + a - b % a;
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b / a;
            break;
        case 14:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 15:
            b = b + a - b % a;
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b / a;
            break;
        case 16:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 17:
            b = b + a - b % a;
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b / a;
            break;
        case 18:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 19:
            b = b + a - b % a;
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b / a;
            break;
        case 20:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наименьший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 21:
            b = b + a - b % a;
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наименьший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b / a;
            break;
        case 22:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наименьший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b;
            break;
        case 23:
            b = b + a - b % a;
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наименьший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b / a;
            break;
        case 24:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наибольший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 25:
            b = b + a - b % a;
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наибольший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b / a;
            break;
        case 26:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наибольший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 27:
            b = b + a - b % a;
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${b * b}&nbsp;=&nbsp;0`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Решите уравнение, в ответе укажите наибольший корень: <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b / a;
            break;

        // find b so that function is an AMF
        case 28:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            else eq = `${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a}b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 29:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            else eq = `${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 30:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;${a}b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 31:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 32:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            else eq = `-${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a}b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 33:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            else eq = `-${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 34:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;${a}b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 35:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b${square}`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b;
            break;
        case 36:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = a * b * b;
            break;
        case 37:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b * b;
            break;
        case 38:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = a * b * b;
            break;
        case 39:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b * b;
            break;
        case 40:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `-${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = a * b * b;
            break;
        case 41:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `-${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b * b;
            break;
        case 42:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = a * b * b;
            break;
        case 43:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = b * b;
            break;
        case 44:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -a * b * b;
            break;
        case 45:
            if (a === 1) eq = `${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b * b;
            break;
        case 46:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -a * b * b;
            break;
        case 47:
            if (a === 1) eq = `${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;-&nbsp;b`;
            else eq = `${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;-&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b * b;
            break;
        case 48:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `-${a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -a * b * b;
            break;
        case 49:
            if (a === 1) eq = `-${letter}${square}&nbsp;-&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `-${a * a}${letter}${square}&nbsp;-&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата суммы (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b * b;
            break;
        case 50:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `-${a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -a * b * b;
            break;
        case 51:
            if (a === 1) eq = `-${letter}${square}&nbsp;+&nbsp;${2 * b}${letter}&nbsp;+&nbsp;b`;
            else eq = `-${a * a}${letter}${square}&nbsp;+&nbsp;${a * 2 * b}${letter}&nbsp;+&nbsp;b`;
            questionLine.innerHTML = `<p class="number">${i + 1})</p>` + `<p>Подберите значение <b>b</b> так, чтобы выражение можно было разложить по формуле квадрата разности (возможно, с каким-то коэффициентом): <b>${eq}</b>.</p>` +
                `<input class="answer" type="text" pattern="[-]{0,1}[0-9]{0,5}" id="answer-${i}">`;
            rightAnswers[i] = -b * b;
            break;
    }

    return questionLine;
}

function checkAnswers() {
    var i;
    var answerBox;
    for (i = 0; i < numberOfQuestions; i++) {
        answerBox = document.getElementById(`answer-${i}`);
        answerBox.classList = ["answer"];
        if (parseInt(answerBox.value) === rightAnswers[i]) answerBox.classList.add("right-answer");
        else answerBox.classList.add("wrong-answer");
    }
}

function showAnswers() {
    var i;
    var answerBox;
    for (i = 0; i < numberOfQuestions; i++) {
        answerBox = document.getElementById(`answer-${i}`);
        answerBox.disabled = true;
        if (parseInt(answerBox.value) !== rightAnswers[i]) {
            answerBox.classList = ["answer"];
            answerBox.value = rightAnswers[i];
        }
    }
}


// general

function menuCreate() {
    var menuBox = document.getElementById("menu");
    menuBox.innerHTML = '<p class="title">Меню</p>';

    var squaresTestButton = document.createElement("button");
    squaresTestButton.id = 'button__squares';
    squaresTestButton.classList.add("button");
    squaresTestButton.classList.add("button_margin-bottom");
    squaresTestButton.innerHTML = "Квадраты и кубы чисел";
    menuBox.appendChild(squaresTestButton);

    squaresTestButton.addEventListener('click', e => testCreate(1));

    var formulasTestButton = document.createElement("button");
    formulasTestButton.id = 'button__formulas';
    formulasTestButton.classList.add("button");
    formulasTestButton.innerHTML = "ФСУ для квадратов";
    menuBox.appendChild(formulasTestButton);

    formulasTestButton.addEventListener('click', e => testCreate(2));
}

function testCreate(n) {
    var menuBox = document.getElementById("menu");
    menuBox.classList.add("hidden");

    var testBox = document.getElementById("test");
    testBox.classList.remove("hidden");

    var textBox = document.createElement("div");
    textBox.id = "title-text";
    textBox.classList.add("title");
    textBox.innerHTML = '<p>Тест</p>';
    testBox.appendChild(textBox);

    var questionsBox = document.createElement("div");
    questionsBox.id = 'questions';
    questionsBox.classList.add("questions");


    var i;
    var unusedNumbersForSquares = new Array(maxSquareRoot + 1);
    var unusedNumbersForCubes = new Array(maxCubeRoot + 1);

    for (i = 0; i < unusedNumbersForSquares.length; i++) unusedNumbersForSquares[i] = i;
    for (i = 0; i < unusedNumbersForCubes.length; i++) unusedNumbersForCubes[i] = i;
    for (i = 0; i < rightAnswers.length; i++) rightAnswers[i] = 0;

    var unusedQuestions = new Array(numberOfQuestionVariations);
    for (i = 0; i < unusedQuestions.length; i++) unusedQuestions[i] = i;

    switch (n) {
        case 1:
            textBox.innerHTML += '<p class="small">Все ответы тут неотрицательные</p>';
            for (i = 0; i < numberOfQuestions; i++) questionsBox.appendChild(calculateNumberSquareOrCube(i, unusedNumbersForSquares, unusedNumbersForCubes));
            break;
        case 2:
            textBox.innerHTML += '<p class="small">Ответы могут быть как положительными, так и отрицательными!</p>' +
                '<p class="small">И коэффициенты могут быть как положительными, так и отрицательными.</p>';
            for (i = 0; i < numberOfQuestions; i++) questionsBox.appendChild(trainAMF(i, unusedQuestions));
            break;
    }
    testBox.appendChild(questionsBox);

    //console.log(rightAnswers);

    var answerBox;

    for (i = 0; i < numberOfQuestions; i++) {
        answerBox = document.getElementById(`answer-${i}`);
        answerBox.addEventListener('keydown', e => moveCursor(e));
    }

    var buttonBox = document.createElement("div");
    buttonBox.classList.add("button__wrapper");
    testBox.appendChild(buttonBox);

    var checkButton = document.createElement("button");
    checkButton.innerHTML = "Проверить";
    checkButton.id = 'button__check';
    checkButton.classList.add("button");
    buttonBox.appendChild(checkButton);

    var seeAnswersButton = document.createElement("button");
    seeAnswersButton.innerHTML = "Посмотреть ответы";
    seeAnswersButton.id = 'button__answers';
    seeAnswersButton.classList.add("button");
    seeAnswersButton.classList.add("hidden");
    buttonBox.appendChild(seeAnswersButton);

    var returnButton = document.createElement("button");
    returnButton.innerHTML = "Вернуться в меню";
    returnButton.id = 'button__return';
    returnButton.classList.add("button");
    buttonBox.appendChild(returnButton);

    checkButton.addEventListener('click', e => {
        if (checkButton.innerHTML == "Проверить") {
            checkButton.innerHTML = "Перепроверить";
            checkButton.classList.add("button_small");
            returnButton.classList.add("button_small");
            seeAnswersButton.classList.remove("hidden");
            seeAnswersButton.classList.add("button_small");
        }
        checkAnswers();
    });

    seeAnswersButton.addEventListener('click', e => {
        checkButton.classList.add("hidden");
        seeAnswersButton.classList.add("hidden");
        returnButton.classList.remove("button_small");
        showAnswers();
    });

    returnButton.addEventListener('click', e => {
        menuBox.classList.remove("hidden");
        clearElement('test');
        testBox.classList.add("hidden");
    })
}

function moveCursor(e) {
    var key = e.key;
    var elementBox;
    var k = parseInt(e.path[0].id.slice(e.path[0].id.indexOf('-') + 1));
    switch (key) {
        case 'ArrowUp':
            if (k !== 0) {
                elementBox = document.getElementById(`answer-${k - 1}`);
                elementBox.focus();
            }
            break;
        case 'Enter':
        case 'ArrowDown':
            if (k !== numberOfQuestions - 1) {
                elementBox = document.getElementById(`answer-${k + 1}`);
                elementBox.focus();
            }
            else {
                elementBox = document.getElementById(`button__check`);
                elementBox.focus();
            }
            break;
    }
}

function clearElement(elementId) {
    var element = document.getElementById(elementId);
    if (element !== null) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}

///////// main function
function init() {
    menuCreate();
}

window.onload = init;