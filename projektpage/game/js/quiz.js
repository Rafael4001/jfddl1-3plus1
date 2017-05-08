//time function
   /*
var sTime = new Date().getTime();
var countDown = 2;

function UpdateTime() {
    var cTime = new Date().getTime();
    var diff = cTime - sTime;
    var seconds = countDown - Math.floor(diff / 1000);
    if (seconds >= 0) {
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
    } else {
    $("#countDown").hide();
      $("#aftercount").show();
       clearInterval(counter);
      $('#myModalTime').modal('show');

    }
}

UpdateTime();
var counter = setInterval(UpdateTime, 5);

<!------------------------------------->

var button1 = document.getElementById('button1');

button1.addEventListener('click', NextQuestion, false);
button1.addEventListener('click', countDown, false);

            */



//Hard coded images copied into img folder
//[img, correct Answer #, Option 1, Option 2, Option 3, Option 4]
    var questions = [
        ['img/car_1.jpg', '1', "Bugatti Veyron", "Ferrari Scuderia", "Alfa Romeo Vigilante", "Subaru Forester WRX"]

        , ['img/car_2.jpg', '2', "BMW e30 M3", "BMW M4", "BMW 640i M Package", "Audi RS2.5"]

        , ['img/car_3.jpg', '1', "Ferrari LaFerrari", "Ferrari 430 Scuderia", "Ferrari GT250", "Lambroghini R34"]

        , ['img/car_4.jpg', '4', "Mercedez SL550 AMG", "McLaren P1", "Mclaren 650LT", "McLaren 12C"]

        , ['img/car_5.jpg', '4', "Subaru Widebody GC8", "Lexus LFA", "Rocket Bunny FRS", "Nissan GTR"]

        , ['img/car_6.jpg', '1', "Lamborghini Huracan", "Lamborghini Aventador", "Maserati Ghibli", "Lamborghini XC90"]

        , ['img/car_7.jpg', '3', "BMW e60 M5", "BMW M6", "BMW F10", "BMW R8 Sti"]

        , ['img/car_8.jpg', '3', "Lamborghini Reventon", "Pagani Scaglieti", "Pagani Huayra", "Pagani Cince Roadster"]

        , ['img/car_9.jpg', '1', "Ferrari 458 Roadster", "Ferrari 488", "Ferrari 458 Coupe", "Ferrari 599GTO"]

        , ['img/car_10.jpg', '4', "Mitsubishi Evoltion MR", "Ford Escort", "2004 Subaru WRX", "2006 Subaru WRX"] // Note: no comma after last entry
    ];
    var points = 0;
    var qNo = 0;
    var correct = 0;
    var cnt = 0;
    var corectAnswer = 0;
    var answer = '';

    function NextQuestion(response) {

        correctAnswer = questions[qNo][1];
        var temp = parseInt(correctAnswer, 10) + 1;
        answer = questions[qNo][temp];
        document.getElementById('answer').innerHTML = answer;

        if ((qNo < questions.length) && (response == correctAnswer)) {
            correct++;
            points += 2;

        } else {
            points -= 1;


        }
        qNo++;
        if (qNo < questions.length) {
            document.getElementById('Pic').src = questions[qNo][0];
            cnt++;


            UpdateOptions();
        } else {
            //Quiz is finished
            //Remove Button and Image Elements

            finishModal(correct, qNo);
        }
    }

    function UpdateOptions() {
        document.getElementById('qNo').innerHTML = 'Pytanie ' + (qNo + 1) + ' z ' + (questions.length);
        document.getElementById('opt1').innerHTML = questions[qNo][2];
        document.getElementById('opt2').innerHTML = questions[qNo][3];
        document.getElementById('opt3').innerHTML = questions[qNo][4];
        document.getElementById('opt4').innerHTML = questions[qNo][5];
    }

    function randOrd() {
        return (Math.round(Math.random()) - 0.5);
    }

    function calculateOpinion(correct, total) {
        var frac = (correct / total);
        var lowerThreshold = 0.10;
        var threshold = 0.50;
        var upperThreshold = 0.90;

        if (correct == 0 && total > 0) {
            return ('Chyba sobie żartujesz, żadnej poprawnej odpowiedzi?');
        }

        if ((frac <= threshold) && frac > lowerThreshold) {
            return ('Oj nie za dobrze, chyba nie interesujesz się samochodami?');
        }
        if (frac >= threshold && frac < upperThreshold) {
            return ('Może te pytania są za proste?');
        }
        if (frac >= upperThreshold) {
            return ("Dobra robota, Jesteś fanem motoryzacji!");
        }
    }

    function finishModal(correctScore, totalQuestions) {
        $('#myModal').modal('show');
        $(".modal-body").text('Odpowiedziałeś prawidłowo na:  ' + correctScore + ' z ' + totalQuestions + ' pytań i zdobyłeś: ' + points + ' z możliwych ' + totalQuestions * 2 + ' punktów. ');
        $(".modal-body-2").text(calculateOpinion(correctScore, totalQuestions));

        ev.preventDefault();
    }

    onload = function () {
        questions = questions.sort(randOrd);
        document.getElementById('Pic').src = questions[0][0];

        UpdateOptions();
    }




