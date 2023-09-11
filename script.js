document.addEventListener("DOMContentLoaded",
function() {
          const daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const currentDate = new Date();
          const currentDay =daysOfWeek[currentDate.getDay()];
          const currentDayElement= document.querySelector('[data-testid="currentDayOfTheWeek"]');
          currentDayElement.textContent=currentDay;

          const currentUTCTime = new Date().toISOString();
          console.log(currentUTCTime) 

          const currentUTCTimeElement=document.querySelector('[data-testid="currentUTCTime"]');
          currentUTCTimeElement.textContent=currentUTCTime;
          
})