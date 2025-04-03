import { Box } from "@mui/material";
import TextBlockImage from "@/components/TextBlockImage";

const TextBlockIntroducingSafenet = () => {
  return (
    <Box mt={{ xs: "-30px", md: "auto" }}>
      <TextBlockImage
        variant="text-image"
        caption="Introducing Safenet"
        title="Safenet is here to move the world's GDP onchain"
        text=""
      >
        <video autoPlay muted playsInline loop width="100%">
          <source src="videos/Safenet/Globe.mp4" type="video/mp4" />
        </video>
      </TextBlockImage>
    </Box>
  );
};

export default TextBlockIntroducingSafenet;
