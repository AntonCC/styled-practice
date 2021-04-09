import styled from 'styled-components'
import Button from './components/button'

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const App = ({ children }) => {
  return (
    <div className="App">
      <MainWrapper>
        <Button primary bgColor='blue' >
          My Primary Button
        </Button>
        <Button>
          My Button
        </Button>
      </MainWrapper>
    </div>
  );
}

export default App;
