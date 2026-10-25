function showInfo(place) {

    let message = "";

    if (place === "Kashi Vishwanath Temple") {

        message =
            "Kashi Vishwanath Temple is one of the major cultural and religious landmarks of Varanasi. It is one of the 12 jyotrilinga dedicated to the lord shiva";

    }

    else if (place === "Sarnath") {

        message =
            "Sarnath is an important Buddhist heritage destination located near Varanasi. It is one of the very famous tourist spot in the varanasi ";

    }

    else if (place === "River Ganga") {

        message =
            "The River Ganga and its ghats are central to the cultural landscape of Varanasi.";

    }

    else if (place === "Heritage Tourism") {

        message =
            "Explore historical places, temples, ghats and museums.";

    }

    else if (place === "Cultural Tourism") {

        message =
            "Discover music, traditional crafts, festivals, cuisine and local traditions.";

    }

    else if (place === "Spiritual Tourism") {

        message =
            "Explore the spiritual and cultural traditions associated with Varanasi.";

    }

    alert(message);
}