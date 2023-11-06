"use client";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import data from "@/data/data";
import HeadSection from "@/component/HeadSection";

export default function Home() {
  const [images, setImages] = useState(data);
  const [selectedImages, setSelectedImages] = useState([]); // [1,2,3,4,5
  // const selectedImages = [];
  function onDragEnd(event) {
    const { active, over } = event;
    if (active.id === over.id) return;
    setImages((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  }

  function Picture({ image }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: image.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
    function handleCheckboxClick(event) {
      const id = event.target.id;
      const isChecked = event.target.checked;
      if (isChecked) {
        selectedImages.push(id);
      } else {
        const index = selectedImages.indexOf(id);
        if (index > -1) {
          selectedImages.splice(index, 1);
        }
      }
    }

    return (
      <div ref={setNodeRef} {...attributes} style={style}>
        <div className={styles.image__wrapper}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={image.selected}
            id={image.id}
            onChange={handleCheckboxClick}
          />
          <Image
            src={image.src}
            alt={`image ${image.id}`}
            width={150}
            height={150}
            draggable={true}
            {...listeners}
          />
        </div>
      </div>
    );
  }

  function ImageMap() {
    return images.map((image) => {
      return <Picture key={image.id} image={image} />;
    });
  }
  // function for deleting images by selectedImages array
  function deleteImages() {
    selectedImages.forEach((id) => {
      const newImages = images.filter((image) => image.id !== id);
      setImages(newImages);
    });
  }
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.whole__section}>
          <HeadSection
            selectedItems={selectedImages}
            deleteFunction={deleteImages}
          />
          <div className={styles.image__gallery}>
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
            >
              <SortableContext strategy={rectSortingStrategy} items={images}>
                <ImageMap />
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    </main>
  );
}
