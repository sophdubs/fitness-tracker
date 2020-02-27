const workoutList = JSON.parse(localStorage.getItem('workout-list')) || {};
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
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const data = collectData();

    workoutList[data.weekday] ? workoutList[data.weekday].push(JSON.stringify(data)) : workoutList[data.weekday] = [JSON.stringify(data)];
    localStorage.setItem('workoutList', JSON.stringify(workoutList));
    
    form.reset();
    document.querySelectorAll('.option').forEach(elem => {
        elem.style.display = 'none';
    });
}

function collectData() {
    const weekday = document.querySelector('[name=weekday-options-list]').value;
    const type = document.querySelector('[name=workout-options-list').value;
    const data = {weekday, type};
    if (type === 'cardio') {
        data['desc']= document.querySelector('[name=description-cardio]').value;
        data['time'] = document.querySelector('[name=time]').value;
        data['distance'] = document.querySelector('[name=distance]').value;
        data['intensity'] = document.querySelector('[name=intensity]').value;
        
    } else {
        data['desc'] = document.querySelector('[name=description-strength]').value;
        data['sets'] = document.querySelector('[name=sets]').value;
        data['reps'] = document.querySelector('[name=reps]').value;
        data['weight'] = document.querySelector('[name=weight]').value;
    }
    return data;
}


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


