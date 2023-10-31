import Image from "next/image";
import styles from "@/styles/HomePage.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <div>N Selected Delete</div>
      </div>
      <div className={styles.image__gallery}>
        <Image
          src="/images/image-1.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-2.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-3.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-4.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-5.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-6.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-7.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-8.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-9.webp"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-10.jpeg"
          alt="Image 1"
          width={200}
          height={200}
        />
        <Image
          src="/images/image-11.jpeg"
          alt="Image 11"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
