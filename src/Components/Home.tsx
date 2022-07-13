import styles from '../Styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src={'images/logo.png'} />
        <h1 className={styles.title}>
          Tech Challenge
        </h1>
        <p className={styles.description}>
          This app is purposefully basic to allow you the freedom to show us your approach to problem solving.
          You can use any tool within the React ecosystem to help you.
          Be mindful to check the solutions work on mobile and desktop resolutions.
          Using Typescript would be a bonus.
          Fork this repo and work your way through the tasks below...
        </p>

        <h1>
          Tasks
        </h1>
        <div className={styles.grid}>
          <a href="/demo" className={styles.card}>
            <h2>1. Display data  &rarr;</h2>
            <p>Click through to this page and you will it has some missing data.
              Fix the problem and get the data displaying on the page.
              Describe the problem and your solution in the given space.</p>
          </a>
          <div className={styles.divider}>- - -</div>
          <a href="/checkout" className={styles.card}>
            <h2>2. Configure a checkout &rarr;</h2>
            <p>The checkout page is currently broken with errors. You should fix these errors and configure some
              mock data for the page. The page should show a list of items a user can add to their basket.
              They should be able to increase and decrease the quantity of each item, with the individual total
              and overall total being calculated. The user should be able to clear the cart of all items,
              with the totals updating. When the user clicks the Buy button you should simulate an api post with a summary
              of the data.</p>
          </a>
          <div className={styles.divider}>- - -</div>
          <a
            href="/"
            className={styles.card}
          >
            <h2>3. Beautify &rarr;</h2>
            <p>Add some animations and styling of your choice to this page.
              The animations should only happen when the element is in the viewport.</p>
          </a>
        </div>
        <h1>Finished? Next steps...</h1>
        <ul className={styles.tasks}>
          <li>update the readme file with any new relevant information</li>
          <li>deploy the project to a free service of your choice</li>
          <li>when you are ready send us a link to your repo</li>
          <li>include a link to the deployed project, your contact details,
            and anything else you'd like to show us</li>
        </ul>
      </main >

      <footer className={styles.footer}>
      </footer>
    </div >
  );
}
