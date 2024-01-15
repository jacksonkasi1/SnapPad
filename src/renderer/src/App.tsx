import { Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-white">SideBar</Sidebar>
        <Content className="border-l bg-zinc-100/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
