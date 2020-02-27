
const day = document.querySelector('#days-of-the-week');
const workout = document.querySelector('#workout-type');
const cardioDetails = document.querySelector('#details-cardio');
const strengthDetails = document.querySelector('#details-strength');

workout.addEventListener('change', (e) => {
    if (e.target.value === 'cardio') {
        cardioDetails.style.display = 'block';
        strengthDetails.style.display = 'none';
    } else {
        strengthDetails.style.display = 'block';
        cardioDetails.style.display = 'none';
    }
});

const form = document.querySelector('#workout-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weekday = document.querySelector('[name=weekday-options-list]').value;
    const type = document.querySelector('[name=workout-options-list').value;
    if (type === 'cardio') {
        const desc = document.querySelector('[name=description-cardio]').value;
        const time = document.querySelector('[name=time]').value;
        const distance = document.querySelector('[name=distance]').value;
        const intensity = document.querySelector('[name=intensity]').value;
    } else {
        const desc = document.querySelector('[name=description-strength]').value;
        const sets = document.querySelector('[name=sets]').value;
        const reps = document.querySelector('[name=reps]').value;
        const weight = document.querySelector('[name=weight]').value;
    }
    console.log('submittedddd');
    
    form.reset();
    document.querySelectorAll('.option').forEach(elem => {
        elem.style.display = 'none';
    });
})


// const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// const addWorkoutForm = document.querySelector('.add-workout-form');
// const workoutList = document.querySelector('.sunday-list');
// const workouts = JSON.parse(localStorage.getItem('workouts')) || {};


// function addWorkout(e) {
//     e.preventDefault();
//     const exercise = (this.querySelector('[name=workout]')).value;
//     let radios = document.querySelectorAll('input[type="radio"]:checked');
//     let day = radios.length>0 ? radios[0].value : 'there was none';
//     console.log(weekdays.indexOf(day));
//     workouts[day] ? workouts[day].push(exercise) : workouts[day]=[exercise];
//     localStorage.setItem('workouts', JSON.stringify(workouts));
//     populateWeek();
//     this.reset();
// }

// addWorkoutForm.addEventListener('submit', addWorkout);

// function populateWeek() {
//     // let week = JSON.parse(localStorage.getItem('workouts'));
//     for (let [key, value] of Object.entries(workouts)) {
//         let weekday = document.querySelector(`.${key}-list`);
//         weekday.innerHTML = value.map(val => {
//             return `
//             <li> ${val} </li>
//             `
//         }).join('');
//     }
// }

// populateWeek();


