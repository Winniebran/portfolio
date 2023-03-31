import { styled } from "@/styles/stitches.config";

export const AboutSection = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  color: "$grey5",
  height: "100vh",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const AboutArea = styled("article", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",
  "@mobile": {
    img: {
      width: "180px",
      height: "180px",
    },
  },
});

export const AboutDiv = styled("div", {
  //   height: "35vh",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  textAlign: "justify",
  gap: "20px",
  justifyContent: "space-evenly",
  "@mobile": {
    gap: "10px",
  },
});
