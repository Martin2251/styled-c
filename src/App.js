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
      <Button primary>Oi</Button>
    </div>
  );
}

const Button = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  background: honeydew;
`;

export default App;
