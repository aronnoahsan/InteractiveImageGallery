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

export default function Home() {
  const [images, setImages] = useState(data);
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
    return (
      <Image
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        src={image.src}
        alt={`image ${image.id}`}
        width={200}
        height={200}
        draggable={true}
      />
    );
  }

  function ImageMap() {
    return images.map((image) => {
      return <Picture key={image.id} image={image} />;
    });
  }
  function deleteImageById(id) {
    const newImages = images.filter((image) => image.id !== id);
    console.log(newImages);
  }
  function countSelectedImageNumber() {
    const selectedImages = images.filter((image) => image.selected);
    return selectedImages.length;
  }

  return (
    <main>
      <div>
        <div>N Selected Delete</div>
      </div>
      <div className={styles.container}>
        <div className={styles.image__gallery}>
          <DndContext onDragEnd={onDragEnd} collisionDetection={closestCenter}>
            <SortableContext strategy={rectSortingStrategy} items={images}>
              <ImageMap />
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </main>
  );
}
