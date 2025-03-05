// Initial Freelancers
const initialFreelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
];
let freelancers = [...initialFreelancers];

const names = ["Carol", "Dave", "D-Money", "Fran", "Goober", "Donger", "Q", "Jackahh"];
const occupations = ["Programmer", "Cleaner", "Fencer", "Conman", "Editor", "Engineer"];

function renderFreelancers() {
    const freelancersContainer = document.getElementById("freelancers");
    freelancersContainer.innerHTML = "";

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement("div");
        freelancerDiv.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        freelancersContainer.appendChild(freelancerDiv);
    });}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = freelancers.length > 0 ? total / freelancers.length : 0;
    document.getElementById("average-price").textContent = `Average starting price: $${average.toFixed(2)}`;}

function generateFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 140) + 600;
    return { name: randomName, price: randomPrice, occupation: randomOccupation };}

function addNewFreelancer(){
    const newFreelancer = generateFreelancer();
    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAveragePrice();}

renderFreelancers();
updateAveragePrice();

setInterval(addNewFreelancer, 3000);