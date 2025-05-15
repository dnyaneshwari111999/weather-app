// const url = 'https://api.openweathermap.org/data/2.5/weather';
// const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

// $(document).ready(function () {
//     weatherFn('Noida'); // Default city

//     // Allow Enter key to trigger search
//     $('#city-input').keypress(function (e) {
//         if (e.which == 13) {
//             $('#city-input-btn').click();
//         }
//     });
// });

// async function weatherFn(cName) {
//     if (!cName.trim()) {
//         alert("Please enter a city name.");
//         return;
//     }

//     const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
//     try {
//         const res = await fetch(temp);
//         const data = await res.json();
//         if (res.ok) {
//             weatherShowFn(data);
//         } else {
//             alert('City not found. Please try again.');
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// function weatherShowFn(data) {
//     $('#city-name').text(data.name);
//     $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//     $('#temperature').html(`${Math.round(data.main.temp)}°C`);
//     $('#description').text(data.weather[0].description);
//     $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
//     $('#weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     $('#weather-info').fadeIn();
// }

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('');

    $('#city-input').keypress(function (e) {
        if (e.which == 13) {
            $('#city-input-btn').click();
        }
    });
});

async function weatherFn(cName) {
    if (!cName.trim()) {
        alert("Please enter a city name.");
        return;
    }

    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${Math.round(data.main.temp)}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    $('#weather-info').fadeIn();
}
