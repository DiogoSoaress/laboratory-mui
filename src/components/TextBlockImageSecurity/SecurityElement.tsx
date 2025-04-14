import { Typography } from "@mui/material";
import { type BaseBlock } from "@/components/Home/types";
import AngleBracketsIcon from "../../../public/images/Home/angle-brackets-icon.svg";
import css from "./styles.module.css";

const SecurityElement = ({ image }: { image: BaseBlock["image"] }) => (
  <div className={css.imageWrapper}>
    <img
      src="./images/Home/security-bg.png"
      alt="Lines background"
      className={css.bgImage}
    />
    {image ? (
      <img src={image.src} alt={image.alt} className={css.image} />
    ) : null}

    <div className={css.list}>
      <div className={css.entry}>
        <AngleBracketsIcon />
        <Typography>Multiple audits</Typography>
      </div>
      <div className={css.entry}>
        <AngleBracketsIcon />
        <Typography>1M$ per year spent on security</Typography>
      </div>
      <div className={css.entry}>
        <AngleBracketsIcon />
        <Typography>Formally verified</Typography>
      </div>
    </div>
  </div>
);

export default SecurityElement;
