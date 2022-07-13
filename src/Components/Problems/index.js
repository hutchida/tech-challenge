import styles from './Problems.module.css'

export const Problems = () => {
  // Do not change the data here
  const commentSelector = [{value: 0, display: false}, {value: 1, display: true}, {value: 2, display: true}]
  const comments = {
    0: 'Kate Bush is amazing', 
    1: 'The Red Shoes is a highly underrated album', 
    2: 'There goes a tenner is a song about a bank robbery gone wrong'
  }
  // change the code below to show the data
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <p>What problems can you see here...and how would you solve them?</p></div><br/>
       {commentSelector.map((comment) => {
         return (
          comment.display || comment.value &&
         <h1>{comments[comment.value]}</h1>
        )})}
        <br/>
        <br/>
        <br/>
        <div className={styles.content}>
          <p>Write your comments below:</p></div>
        <p></p>
      </div>
    </div>
  );
};
