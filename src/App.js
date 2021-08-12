import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { keyframes } from "styled-components";

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
      <LondonButton>hi</LondonButton>
      <Button primary>Oi</Button>
      <Button>chicago</Button>
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
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

const LondonButton = styled.a`
  color: red;
  border: 4px solid red;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  background: honeydew;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
export default App;
