import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Button
        href="https://github.com/styled-components/styled-components"
        target="_blank"
        rel="noopener"
        primary
      >
        GitHub
      </Button>

      <TomatoButton>hello</TomatoButton>
    </div>
  );
}

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: blue;
  color: black;
  border: 2px black;
  text-decoration: none;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  background: honeydew;
`;

export default App;
