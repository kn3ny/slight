import style from "./ColorBox.module.scss";

export default function ColorBox(props) {
    return (
      <div className={style.box} style={{
          background: `linear-gradient(${props.colorFrom}, ${props.colorTo})`
      }} />
    );
}