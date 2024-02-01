import styled, {keyframes} from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;
`;

const Btn = styled.button`
  color: white;
  background-color: ${props => props.theme.backgroundColor};
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

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{}
`;

const Emoji = styled.span`
  font-size: 36px;
  &:hover{
    font-size: 96px;
  }
`;

const AnimationBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Emoji}{
    &:active{
      opacity: 0;
    }
  };
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
    <AnimationBox>
      <Emoji>Hey</Emoji>
    </AnimationBox>
  </Father>;
}

export default App;
