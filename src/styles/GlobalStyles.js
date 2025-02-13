import { createGlobalStyle } from "styled-components";

const CreateGlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  font-synthesis: none;
  --color: rgba(255, 255, 255, 1);
  --main-color: rgba(201, 138, 64, 1);
  --main-transition: 0.5s;
  --orange-color: rgba(253, 186, 16, 1);
}
* {
  padding: 0;
  margin: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  box-sizing: border-box;
}
body {
  margin: 0;
  min-height: 200vh;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
`;
export default CreateGlobalStyle;
