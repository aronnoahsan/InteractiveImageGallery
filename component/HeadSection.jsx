import styles from "@/styles/HeadSection.module.css";

function HeadSection({ selectedItems, deleteFunction }) {
  const ammountOfSelectedItems = selectedItems.length;
  console.log(ammountOfSelectedItems);
  if (ammountOfSelectedItems > 0) {
    return (
      <div className={styles.head__section}>
        <strong>{ammountOfSelectedItems} Selected</strong>
        <strong>Delete</strong>
      </div>
    );
  } else {
    return <h2>Gallery</h2>;
  }
}

export default HeadSection;
