import styled from 'styled-components'
import Button from './components/button'
import Card from './components/card'

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if(page === 'first') return 'flex-end';
    else if(page === 'middle') return 'space-between';
    else return 'flex-start';
  }};
`

const Link = styled.a.attrs(props => ({
  target: '_blank'
}))`
  color: violet;
  font-size: 1.5rem;
  margin: 1rem;
`

const App = ({ children }) => {
  return (
    <div className="App">
      <MainWrapper>
        <Button primary>
          My Primary Button
        </Button>
        <Button bgColor='blue'>
          My Button
        </Button>
        <Card innerColor='blue' />
        <Link href='https://www.google.com'>
          One Link
        </Link>
        <PaginationWrapper page='first'>
          <Button>
            Page 1
          </Button>
        </PaginationWrapper>
      </MainWrapper>
    </div>
  );
}

export default App;
