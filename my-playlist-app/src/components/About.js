function About() {
  return (
    <div className="about">
      <h2>About me</h2>
      <p>Hi, my name is Jason Martis</p>
      <p>I'm a student at Winc Academy</p>
      <p>I like to build projects, follow coding tutorials and keep learning</p>
      <p>
        When I'm not coding, you can find me playing video games with my friends
      </p>

      <h2>Requirements</h2>
      <li>
        As a user, I want to enter the following information about my song:
        title, artist, genre, rating (dropdown menu is not required).
      </li>
      <li>
        As a user, I want to be able to click on one button so that my entered
        song is added to my playlist.
      </li>

      <li>
        As a user, I want to be able to see my songs in an overview (my
        playlist), in which all entered data are visible
      </li>

      <h2>Additional points</h2>
      <li>1 POINT – Delete button: delete songs from the state</li>
      <li>
        2 POINTS – Routing (/Navigation): add a navbar or menu with a link and
        page "About us ", containing a short story about yourself and this
        project (max 10 sentences)
      </li>
    </div>
  );
}

export default About;
