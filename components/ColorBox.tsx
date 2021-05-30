import tinycolor from "tinycolor2";
import styles from "./ColorBox.module.scss";

export default function ColorBox(props) {
    const topColor = tinycolor.fromRatio({
      h: (props.step)/100,
      s: 0.86,
      l: 0.53,
    });

    const bottomColor = tinycolor.fromRatio({
      h: (props.step)/100 + 0.03,
      s: 0.89,
      l: 0.48,
    });

    return (
      <div className={styles.box} style={{
        position: "relative",
        background: `linear-gradient(${topColor.toHexString()}, ${bottomColor.toHexString()})`
      }}>
        <span className={styles.box__colorCode} style={{
          position: "absolute",
          top: "0"
        }}>{topColor.toHexString()}</span>

        <span className={styles.box__colorCode} style={{
          position: "absolute",
          bottom: "0"
        }}>{bottomColor.toHexString()}</span>
      </div>
    );
}