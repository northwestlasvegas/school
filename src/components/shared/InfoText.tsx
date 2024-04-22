import { Typography } from "@mui/material";
import { ContentContainer } from "./ContentContainer";

export const InfoText = ({ text, title, style, titleVariant = "h5" }: { text: string | JSX.Element; title?: string, style?: React.CSSProperties, titleVariant?: any; }) => {
  return (
    <ContentContainer style={style}>
      <>
        {title ? <Typography variant={titleVariant}
          sx={{
            paddingBottom: "10px",
            color: "white",
            fontFamily: "Light",
          }}>
          {title}
        </Typography> : null}
        {typeof text === "string" ? <Typography
          variant="body1"
          sx={{
            color: "white",
          }}
        >
          {text}
        </Typography> : text}
      </>
    </ContentContainer>
  )
}