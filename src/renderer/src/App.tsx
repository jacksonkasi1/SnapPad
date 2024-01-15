import { ActionButtonRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components';
import Test from './components/Test';


const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-white">
          <ActionButtonRow className='flex justify-between mt-1' />
        </Sidebar>
        <Content className="border-l bg-zinc-100/50 border-l-white/20">
          Content
          <Test />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
