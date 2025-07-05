
// function getClimateFact(crisis) {
//     const facts = {
//         flood: "Floods are becoming more frequent due to extreme rainfall from climate change.",
//         heatwave: "Urban areas can be 7°F hotter due to heat islands.",
//         wildfire: "90% of wildfires are caused by human activity and climate conditions.",
//         storm: "Storms are more intense due to warmer ocean temperatures.",
//         drought: "Climate change has doubled the area affected by droughts.",
//         conflict: "Resource scarcity due to climate can fuel conflicts.",
//         pandemic: "Deforestation can increase the chance of zoonotic diseases.",
//         blackout: "Heatwaves increase energy use, often leading to blackouts."
//     };
//     return facts[crisis] || "Stay informed and stay safe!";
// }

// function generateBadge(score) {
//     if (score > 3) {
//         return "🏅 Climate Champion Badge Earned!";
//     } else if (score > 1) {
//         return "✅ Climate Ready Badge Earned!";
//     }
//     return "";
// }

// document.getElementById('resilienceForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const location = document.getElementById('location').value;
//     const housing = document.getElementById('housing').value;
//     const familySize = parseInt(document.getElementById('familySize').value);
//     const pets = document.getElementById('pets').checked;
//     const crises = Array.from(document.getElementById('crisis').selectedOptions).map(opt => opt.value);
//     const sustainable = document.getElementById('sustainable').checked;
    
//     let output = '<h2>Your Custom Emergency Kit:</h2><ul>';
//     output += '<li>Water & Non-perishable Food</li>';
//     output += '<li>First Aid Kit</li>';
//     output += '<li>Flashlight & Batteries</li>';
//     if (sustainable) {
//         output += '<li>Solar-powered lantern</li>';
//         output += '<li>Reusable water bottles</li>';
//     } else {
//         output += '<li>Regular torch & bottled water</li>';
//     }
//     if (pets) output += '<li>Pet food and supplies</li>';
//     if (familySize > 3) output += '<li>Extra rations for large family</li>';
//     if (crises.includes('heatwave')) output += '<li>Cooling packs & Electrolytes</li>';
//     output += '</ul>';

//     let factDisplay = '<h3>Relevant Climate Facts:</h3><ul>';
//     crises.forEach(c => {
//         factDisplay += '<li>' + getClimateFact(c) + '</li>';
//     });
//     factDisplay += '</ul>';

//     const badge = generateBadge(crises.length);

//     document.getElementById('output').innerHTML = output;
//     document.getElementById('climateFacts').innerHTML = factDisplay;
//     document.getElementById('badgeContainer').innerText = badge;
// });

// function checkAnswer(ans) {
//     if (ans === "carpool") {
//         document.getElementById('quizResult').innerText = "✅ Correct! Carpooling helps reduce emissions.";
//     } else {
//         document.getElementById('quizResult').innerText = "❌ Incorrect. Try again!";
//     }
// }
