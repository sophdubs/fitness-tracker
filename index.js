
const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const addWorkoutForm = document.querySelector('.add-workout-form');
const workoutList = document.querySelector('.sunday-list');
const workouts = JSON.parse(localStorage.getItem('workouts')) || {};


function addWorkout(e) {
    e.preventDefault();
    const exercise = (this.querySelector('[name=workout]')).value;
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    let day = radios.length>0 ? radios[0].value : 'there was none';
    console.log(weekdays.indexOf(day));
    workouts[day] ? workouts[day].push(exercise) : workouts[day]=[exercise];
    localStorage.setItem('workouts', JSON.stringify(workouts));
    populateWeek();
    this.reset();
}

addWorkoutForm.addEventListener('submit', addWorkout);

function populateWeek() {
    // let week = JSON.parse(localStorage.getItem('workouts'));
    for (let [key, value] of Object.entries(workouts)) {
        let weekday = document.querySelector(`.${key}-list`);
        weekday.innerHTML = value.map(val => {
            return `
            <li> ${val} </li>
            `
        }).join('');
    }
}

populateWeek();


