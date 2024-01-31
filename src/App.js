import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;
function App() {
  return <Father>
    <Btn>Log in</Btn>
    <Btn as="a" href="/">Log in</Btn>
    <Box bgColor="teal">
      <Text>Hello</Text>
    </Box>
    <Circle bgColor="tomato"></Circle>
    <Input></Input>
    <Input></Input>
    <Input></Input>
    <Input></Input>
  </Father>;
}

export default App;
