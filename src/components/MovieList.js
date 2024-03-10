import React from "react";
import Movie from "./Movie";

//List of movies
export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          key: 1,
          title: "2001: A Space Odyssey",
          director: "Stanley Kubrick",
          year: 1968,
          image: "spaceodyssey.jpg",
          synopsis:
            "A mind-bending journey through space and time, as astronauts encounter a mysterious monolith that may hold the key to human evolution.",
        },
        {
          key: 2,
          title: "Cloud Atlas",
          director: "Tom Tykwer, Lana Wachowski, and Lilly Wachowski",
          year: 2012,
          image: "cloudatlas.jpg",
          synopsis:
            "An ambitious epic spanning multiple timelines and interconnected lives, exploring themes of reincarnation and destiny.",
        },
        {
          key: 3,
          title: "Ex Machina",
          director: "Alex Garland",
          year: 2014,
          image: "exmachina.webp",
          synopsis:
            "A brilliant programmer is invited to test an advanced AI with human-like consciousness, leading to unexpected consequences.",
        },
        {
          key: 4,
          title: "La Jetée",
          director: "Chris Marker",
          year: 1962,
          image: "lajetee.jpg",
          synopsis:
            "A short experimental film told through still images, depicting a post-apocalyptic world and time travel experiments.",
        },
        {
          key: 5,
          title: "Metropolis",
          director: "Fritz Lang",
          year: 1927,
          image: "metropolis.jpg",
          synopsis:
            "A groundbreaking silent film set in a futuristic city, exploring class struggle and the creation of an android.",
        },
        {
          key: 6,
          title: "12 Monkeys",
          director: "Terry Gilliam",
          year: 1995,
          image: "12monkeys.jpg",
          synopsis:
            "A time-traveling convict is sent back to prevent a deadly virus outbreak that decimated humanity.",
        },
        {
          key: 7,
          title: "Arrival",
          director: "Denis Villeneuve",
          year: 2016,
          image: "arrival.jpg",
          synopsis:
            "Linguistics professor Louise Banks communicates with extraterrestrial visitors, unraveling the mysteries of their language.",
        },
        {
          key: 8,
          title: "Blade Runner",
          director: "Ridley Scott",
          year: 1982,
          image: "bladerunner.jpg",
          synopsis:
            "In a dystopian future, a retired cop hunts down rogue androids known as replicants.",
        },
        {
          key: 9,
          title: "Children of Men",
          director: "Alfonso Cuarón",
          year: 2006,
          image: "childrenofmen.png",
          synopsis:
            "In a world where infertility has led to societal collapse, a disillusioned bureaucrat becomes involved in a mission to protect a pregnant woman.",
        },
        {
          key: 10,
          title: "The Matrix",
          director: "The Wachowskis",
          year: 1999,
          image: "thematrix.jpg",
          synopsis:
            "A computer hacker discovers that reality is a simulated construct controlled by intelligent machines.",
        },
        {
          key: 11,
          title: "Planet of the Apes",
          director: "Franklin J. Schaffner",
          year: 1968,
          image: "planetoftheapes.png",
          synopsis:
            "Astronauts crash-land on a planet ruled by intelligent apes, challenging their understanding of evolution and civilization.",
        },
        {
          key: 12,
          title: "The Thing",
          director: "John Carpenter",
          year: 1982,
          image: "thething.jpg",
          synopsis:
            "A group of researchers in Antarctica encounter a shape-shifting alien organism that threatens their survival.",
        },
        {
          key: 13,
          title: "The Terminator",
          director: "James Cameron",
          year: 1984,
          image: "theterminator.jpg",
          synopsis:
            "A cyborg assassin is sent from the future to eliminate the mother of the future leader of the human resistance.",
        },
        {
          key: 14,
          title: "They Live",
          director: "John Carpenter",
          year: 1988,
          image: "theylive.jpg",
          synopsis:
            "A drifter discovers special sunglasses that reveal hidden messages and the true nature of an alien-controlled society.",
        },
        {
          key: 15,
          title: "Everything Everywhere All At Once",
          director: "Daniel Kwan and Daniel Scheinert",
          year: 2022,
          image: "everythingeverywhereallatonce.jpg",
          synopsis:
            "An elderly woman navigates parallel universes to save her family and the multiverse itself.",
        },
        {
          key: 16,
          title: "Blade Runner 2049",
          director: "Denis Villeneuve",
          year: 2017,
          image: "bladerunner2049.jpg",
          synopsis:
            "A sequel to the original Blade Runner, as a new blade runner uncovers long-buried secrets.",
        },
        {
          key: 17,
          title: "A.I. Artificial Intelligence",
          director: "Steven Spielberg",
          year: 2001,
          image: "ai.jpg",
          synopsis:
            "In the 22nd century, rising sea levels from global warming have wiped out 99% of existing cities, reducing the world's population. Mecha humanoid robots, seemingly capable of complex thought but lacking emotions, have been created as replacements.",
        },
        {
          key: 18,
          title: "Fantastic Planet",
          director: "René Laloux",
          year: 1973,
          image: "fantasticplanet.jpg",
          synopsis:
            "An animated science fiction film set on a distant planet inhabited by giant blue aliens and tiny human-like creatures. The story explores themes of oppression, rebellion, and coexistence.",
        },
        {
          key: 19,
          title: "Interstellar",
          director: "Christopher Nolan",
          year: 2014,
          image: "interstellar.jpg",
          synopsis:
            "In a near-future Earth facing environmental collapse, a group of astronauts embarks on a space mission through a wormhole to find a new habitable planet for humanity.",
        },
        {
          key: 20,
          title: "E.T. The Extraterrestrial",
          director: "Steven Spielberg",
          year: 1982,
          image: "et.jpg",
          synopsis:
            "A heartwarming tale of friendship between a young boy and a stranded extraterrestrial who longs to return home. Together, they navigate the challenges of Earth and government agents.",
        },
        {
          key: 21,
          title: "Dune",
          director: "David Lynch",
          year: 1984,
          image: "dune.jpg",
          synopsis:
            "Adapted from Frank Herbert's novel, 'Dune' is a visually stunning epic set in a distant future where noble families vie for control over a desert planet rich in a valuable spice called melange.",
        },
        {
          key: 22,
          title: "The Time Machine",
          director: "George Pal",
          year: 1960,
          image: "thetimemachine.jpg",
          synopsis:
            "Based on H.G. Wells' classic novel, this film follows a Victorian inventor who builds a time machine and travels to the distant future, encountering both utopian and dystopian societies.",
        },
        {
          key: 23,
          title: "Pi",
          director: "Darren Aronofsky",
          year: 1998,
          image: "pi.jpg",
          synopsis:
            "A brilliant mathematician discovers a mysterious numerical pattern that holds the key to understanding the universe. As he delves deeper, paranoia and obsession consume him.",
        },
        {
          key: 24,
          title: "Demolition Man",
          director: "Marco Brambilla",
          year: 1993,
          image: "demolitionman.jpg",
          synopsis:
            "In a utopian future where crime has been eradicated, a cop and a criminal from the past are thawed out of cryogenic freeze. They must adapt to a sanitized society and stop a dangerous villain.",
        },
        {
          key: 25,
          title: "The Hitchhiker's Guide to the Galaxy",
          director: "Garth Jennings",
          year: 2005,
          image: "guidetogalaxy.jpg",
          synopsis:
            "Based on Douglas Adams' comedic sci-fi series, this film follows an ordinary human who is unwittingly swept into an intergalactic adventure after Earth's destruction to make way for a hyperspace bypass.",
        },
        {
          key: 26,
          title: "A Trip to the Moon",
          director: "Georges Méliès",
          year: 1902,
          image: "triptothemoon.webp",
          synopsis:
            "A pioneering silent film, 'A Trip to the Moon' depicts a group of astronomers who journey to the moon using a giant cannon. They encounter strange lunar inhabitants and return to Earth with newfound knowledge.",
        },
        {
          key: 27,
          title: "The Man Who Fell to Earth",
          director: "Nicolas Roeg",
          year: 1976,
          image: "manwhofelltoearth.jpg",
          synopsis:
            "David Bowie stars as an extraterrestrial visitor who arrives on Earth seeking water for his drought-stricken planet. As he becomes embroiled in human affairs, he grapples with isolation and identity.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="pb-5">
        {this.state.movies.map((movie) => (
          // This will iterate through the list of movies and create an instance of movie for each one
          <Movie movie={movie} /> // Sends the movie instance to the Movie component
        ))}
      </div>
    );
  }
}
