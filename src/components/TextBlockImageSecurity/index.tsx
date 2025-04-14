import TextBlockImage, {
  type TextBlockImageProps,
} from "@/components/common/TextBlockImage";
import SecurityElement from "@/components/TextBlockImageSecurity/SecurityElement";

const TextBlockImageSecurity = (props: TextBlockImageProps) => (
  <TextBlockImage {...props}>
    <SecurityElement image={props.image} />
  </TextBlockImage>
);

export default TextBlockImageSecurity;
