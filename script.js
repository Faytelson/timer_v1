window.addEventListener("DOMContentLoaded", function(){
    //set deadline
    const deadline = "2022-07-13";

    //get time to deadline
    function getTimeLeft(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

            return {
                total: t,
                days,
                hours,
                minutes,
                seconds,
            }
    }

    //set timer
    function setTimer(selector, endTime) {
        
        //find timer and it's fields
        let timerBody = document.querySelector(selector),
            daysField = timerBody.querySelector('#days'),
            hoursField = timerBody.querySelector('#hours'),
            minutesField = timerBody.querySelector('#minutes'),
            secondsField = timerBody.querySelector('#seconds'),
            timeInterval = setInterval(setFieldValue, 1000);

        //manually turn on function for setting fields
        setFieldValue();

        //set value of timer's fields
        function setFieldValue() {
            let {total, days, hours, minutes, seconds} = getTimeLeft(endTime);
            daysField.innerHTML = addZero(days);
            hoursField.innerHTML = addZero(hours);
            minutesField.innerHTML = addZero(minutes);
            secondsField.innerHTML = addZero(seconds);

            //check condition (stop timer)
            if(total <= 0) {
                daysField.innerHTML = addZero(0);
                hoursField.innerHTML = addZero(0);
                minutesField.innerHTML = addZero(0);
                secondsField.innerHTML = addZero(0);

                clearInterval(timeInterval);
            }
        }

        function addZero(num) {
            if(num >= 0 && num < 10) {
                return `0${num}`;
            } else return num;
        }
    }
    setTimer('.timer__body', deadline);
});