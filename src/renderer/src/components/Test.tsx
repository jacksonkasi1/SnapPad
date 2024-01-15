import { Alert, Button } from '@heathmont/moon-core-tw'
import { ArrowsDiagonalsBltr } from '@heathmont/moon-icons-tw'

const Test = () => {
  return (
    <div>
      <ArrowsDiagonalsBltr />
      <Button>Default</Button>
      <Alert>
        <Alert.Title>Alert title</Alert.Title>
        <Alert.Message>Alert message</Alert.Message>
      </Alert>
    </div>
  )
}

export default Test
