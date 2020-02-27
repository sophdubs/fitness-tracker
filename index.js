const workoutList = JSON.parse(localStorage.getItem('workoutList')) || {};
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
    populateWeek();
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

function populateWeek() {
    for (let [key, value] of Object.entries(workoutList)) {
        let weekday = document.querySelector(`.${key}-list`);
        weekday.innerHTML = value.map(val => {
            val = JSON.parse(val);
            if (val.type === 'strength') {
                return `
                <li>
                    <ul class="workout-box strength">
                        <li class="type">${val.type} workout</li>
                        <li class="desc">${val.desc}</li>
                        <li class="sets">Sets:${val.sets}</li>
                        <li class="reps">Reps:${val.reps}</li>
                        <li class="weight">Weight:${val.weight}</li>
                    <ul>
                </li>
                `
            } else {
                return `
                <li>
                    <ul class="workout-box cardio">
                        <li class="type">${val.type} workout</li>
                        <li class="desc">${val.desc}</li>
                        <li class="sets">Time:${val.time}</li>
                        <li class="reps">Distance:${val.distance}</li>
                        <li class="weight">Intensity:${val.intensity}</li>
                    <ul>
                </li>
                `
            }
        }).join('');
        // maybe use a helper to construct the inner html from value
        //remember to add class .cardio or .strength to give them different colors with css
    }
}


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


