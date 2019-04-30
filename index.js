window.addEventListener("DOMContentLoaded", function() {
    
    "use strict";

    let tab = document.querySelectorAll(".info-header-tab"),
        infoHeader = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            if(tabContent[i].classList.contains("show") || !tabContent[i].classList.contains("hide")) {
                tabContent[i].classList.remove("show");
                tabContent[i].classList.add("hide");    
            }
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    infoHeader.addEventListener("click", function(event) {
        let target = event.target;

        if(target && target.classList.contains("info-header-tab")) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = "2019-04-25";

    function getTimeRemaining(endTime) {
        let t       = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours   = Math.floor( (t / (1000*60*60) ) );

            return {
                "total"   : t,
                "hours"   : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
    }

    function setClock(id, endTime) {
        let timer   = document.getElementById(id),
            hours   = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            } 
        }
    }

    setClock("timer", deadline);

    // Modal window

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.addEventListener("click", function() {
        this.classList.add("more-splash");
        showModalWindow();
    });

    close.addEventListener("click", function() {
        more.classList.remove("more-splash");
        showModalWindow(false);
    });

    function showModalWindow(show) {
        if(show === false) {
            document.body.style.overflow = "";
            overlay.style.display = "none";
            return;
        }

        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // Modal window in tab
    let info = document.querySelector(".info");

    info.addEventListener("click", function(event) {
        
        let target = event.target;

        if(target && target.classList.contains("description-btn")) {
            // console.log("done");
            showModalWindow();
        }
    });
});