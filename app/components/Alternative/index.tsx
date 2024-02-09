import styles from './alternative.module.css';

interface AlternativeProps {
  option: string;
  order: number;
}

export default function Alternative(props: AlternativeProps) {
  return (
    <>
      <input type="radio" id={`alternative-${props.order}`} value={props.order} name="option" className={styles.input} />
      <label className={styles.label} htmlFor={`alternative-${props.order}`}>
        {props.option}
      </label>
    </>
  );
}
