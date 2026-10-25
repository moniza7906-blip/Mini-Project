/* =========================================
   HERITAGE INFORMATION
========================================= */

const heritageData = {

    /* ---------- TEMPLES ---------- */

    kashi: {
        category: "Temples & Religious Heritage",

        title: "Kashi Vishwanath Temple",

        location: "📍 Varanasi, Uttar Pradesh",

        history:
            "The Kashi Vishwanath Temple is one of the most important temples in Varanasi and is dedicated to Lord Shiva. The temple is located in the historic heart of the city near the Ganges.",

        significance:
            "The temple holds immense religious significance for Hindu pilgrims and is closely associated with the spiritual identity of Varanasi.",

        tips:
            "Visitors should follow temple rules and security guidelines. Check the current visiting and entry arrangements before travelling."
    },


    sankat: {
        category: "Temples & Religious Heritage",

        title: "Sankat Mochan Hanuman Temple",

        location: "📍 Varanasi, Uttar Pradesh",

        history:
            "Sankat Mochan Hanuman Temple is a well-known temple dedicated to Lord Hanuman and is an important religious site in Varanasi.",

        significance:
            "The temple is known for its devotional traditions and plays an important role in the religious and cultural life of the city.",

        tips:
            "Visitors should maintain respectful behaviour and follow the temple's rules regarding photography and belongings."
    },


    durga: {
        category: "Temples & Religious Heritage",

        title: "Durga Temple",

        location: "📍 Varanasi, Uttar Pradesh",

        history:
            "The Durga Temple is a historic temple in Varanasi known for its distinctive architectural style and association with Hindu religious traditions.",

        significance:
            "The temple is an important religious and cultural landmark and attracts devotees as well as visitors interested in Varanasi's heritage.",

        tips:
            "Dress respectfully and follow the rules of the temple while visiting."
    },


    /* ---------- GHATS ---------- */

    dashashwamedh: {
        category: "Ghats",

        title: "Dashashwamedh Ghat",

        location: "📍 Ganges River, Varanasi",

        history:
            "Dashashwamedh Ghat is one of the most prominent ghats along the Ganges in Varanasi and is located close to the Kashi Vishwanath Temple.",

        significance:
            "The ghat is especially famous for the evening Ganga Aarti, which has become one of the city's most recognised cultural and spiritual experiences.",

        tips:
            "Evenings can be very crowded. Keep your belongings secure and follow local guidelines while attending the Ganga Aarti."
    },


    assi: {
        category: "Ghats",

        title: "Assi Ghat",

        location: "📍 Southern Varanasi",

        history:
            "Assi Ghat is situated in the southern part of Varanasi near the meeting point of the Ganges and the Assi River.",

        significance:
            "It is an important part of the city's riverside culture and is popular for religious activities, cultural events and sunrise experiences.",

        tips:
            "Early morning is a popular time to visit. Keep the riverfront clean and respect local customs."
    },


    manikarnika: {
        category: "Ghats",

        title: "Manikarnika Ghat",

        location: "📍 Varanasi, Uttar Pradesh",

        history:
            "Manikarnika Ghat is one of the oldest and most significant ghats of Varanasi and has been closely associated with Hindu funeral traditions for centuries.",

        significance:
            "The ghat holds profound religious importance and is considered one of the most sacred cremation sites in Hindu tradition.",

        tips:
            "Visitors should behave with particular sensitivity and respect. Avoid photography of funeral ceremonies or people without permission."
    },


    /* ---------- HISTORIC PLACES ---------- */

    sarnath: {
        category: "Historic Places",

        title: "Sarnath",

        location: "📍 Sarnath, near Varanasi",

        history:
            "Sarnath is an important historical and Buddhist heritage site near Varanasi. It is traditionally associated with the Buddha's first sermon after attaining enlightenment.",

        significance:
            "The archaeological remains, monuments and museum at Sarnath make it an important destination for Buddhist history and heritage.",

        tips:
            "Allow enough time to explore the archaeological area and museum. Follow the site's preservation rules."
    },


    ramnagar: {
        category: "Historic Places",

        title: "Ramnagar Fort",

        location: "📍 Ramnagar, Varanasi",

        history:
            "Ramnagar Fort is a historic fort situated on the eastern bank of the Ganges, opposite the main city of Varanasi.",

        significance:
            "The fort represents the region's royal, architectural and cultural history and contains heritage structures and collections.",

        tips:
            "Check current opening hours and visitor information before planning your visit."
    },


    dhamek: {
        category: "Historic Places",

        title: "Dhamek Stupa",

        location: "📍 Sarnath, near Varanasi",

        history:
            "Dhamek Stupa is a major Buddhist monument located at Sarnath and forms part of the area's important archaeological remains.",

        significance:
            "The monument is closely associated with the Buddhist heritage of Sarnath and attracts visitors from around the world.",

        tips:
            "Maintain silence and respect the archaeological site. Follow all visitor and photography guidelines."
    }

};


/* =========================================
   CATEGORY FILTER
========================================= */

function filterPlaces(category, clickedButton) {

    // Get all heritage cards
    const cards =
        document.querySelectorAll(".heritage-card");

    // Get all category buttons
    const buttons =
        document.querySelectorAll(".category-btn");


    // Remove active state from every button
    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Add active state to clicked button
    clickedButton.classList.add("active");


    // Show/hide cards
    cards.forEach(function(card) {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (card.classList.contains(category)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}


/* =========================================
   OPEN DETAILS
========================================= */

function showDetails(place) {

    // Get information for selected place
    const data = heritageData[place];


    // Put information inside popup
    document.getElementById("detailCategory").textContent =
        data.category;


    document.getElementById("detailTitle").textContent =
        data.title;


    document.getElementById("detailLocation").textContent =
        data.location;


    document.getElementById("detailHistory").textContent =
        data.history;


    document.getElementById("detailSignificance").textContent =
        data.significance;


    document.getElementById("detailTips").textContent =
        data.tips;


    // Display popup
    document.getElementById("detailsModal").style.display =
        "flex";
}


/* =========================================
   CLOSE DETAILS
========================================= */

function closeDetails() {

    document.getElementById("detailsModal").style.display =
        "none";

}


/* =========================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("detailsModal");


    if (event.target === modal) {

        closeDetails();

    }

});


/* =========================================
   CLOSE POPUP WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeDetails();

    }

});