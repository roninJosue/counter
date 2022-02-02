import {
  RecoilRoot,
  useRecoilState,
  atom,
  selector, useRecoilValue
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TextInput />
      <Counter />
    </RecoilRoot>
  );
}

const textInputState = atom({
  key: 'textInputState',
  default: ''
})

const textInputSelector = selector({
  key: 'textInputSelector',
  get: ({get}) => {
    const text = get(textInputState)
    return text.length
  }
})

const TextInput = () => {
  const [text, setText] = useRecoilState(textInputState)

  const handleChange = ({value}) => {
    setText(value)
  }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={({target}) => handleChange(target)}
      />
    </div>
  )
}

const Counter = () => {
  const len = useRecoilValue(textInputSelector)
  return (<span>{len}</span>)
}

export default App;
