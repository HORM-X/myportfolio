import styles from "./PageDescription.module.css";

export default function PageDescription({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <div></div>
      <span>{description}</span>
    </div>
  );
}
