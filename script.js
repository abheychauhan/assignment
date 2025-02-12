const Countries = ['Uzbekistan','Kazakhstan','Philippines','Georgia','Kyrgyzstan','Egypt']

const countryList = document.getElementById('Country');

countryList.innerHTML = Countries.map(list=>`
     <ul class="list-disc pl-6 mb-2 text-lg space-y-2">
            <li>${list}</li>

        </ul>
    `).join('')


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (name.length<3 || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("formMessage").classList.remove("hidden");
    document.getElementById("contactForm").reset();
});