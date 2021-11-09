import styles from "./ProjectCard.module.css";
import Badge from "./Badge";

//In Mobile when the card is click on i want the detail pane at the bottom to slide up
//and reveal more detail

//In desktop i want the details pane to slide up when the mouse hovers over the card
//I think these needs to be done using JS and events

//So when i mobile layout, can use a media hook for that (see gas induction) then listening
//to the click event, then slide pane up, in Desktop dont listen for the click event
//and just use normal css selection hover.

//Also in mobile view if the card goes out of view then slide the pane down to
//normal view

//remember in react you dont manipulate the DOM directly
//When the card slides out of view you need to somehome have a re-render of the
//card with the pane in the down position.

//have an event that fires when the card is out of view that changes a state and
//forces the card to re-render

//Could use the on scroll, onDOMContentLoaded, onload, onresize event

//Could use this https://www.npmjs.com/package/react-is-visible
//https://www.webtips.dev/webtips/react-hooks/element-in-viewport
//https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.detailContainer}>
        <div className={styles.top}>
          <h3>Timer App</h3>
          <div className={styles.tech}></div>
        </div>
        <div className={styles.detail}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
