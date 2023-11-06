import styles from "@/styles/HeadSection.module.css";

function HeadSection({ selectedItems, deleteFunction }) {
  const ammountOfSelectedItems = selectedItems.length;

  if (ammountOfSelectedItems > 0) {
    return (
      <div className={styles.head__section}>
        <strong>{ammountOfSelectedItems} Selected</strong>
        <strong onClick={deleteFunction} className={styles.delete__button}>
          Delete
        </strong>
      </div>
    );
  } else {
    return <h2>Gallery</h2>;
  }
}

export default HeadSection;
