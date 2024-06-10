import React from 'react'
import { Modal, ModalContent, ModalBody, ModalFooter } from '@nextui-org/react'
import Sidebar, { SidebarProps } from './Sidebar'
import Content, { ContentProps } from './Content'

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> & {
  Sidebar: React.FC<SidebarProps>
  Content: React.FC<ContentProps>
} = ({ children }) => {
  return (
    <Modal
      size="5xl"
      isOpen
      backdrop="transparent"
      hideCloseButton
      placement="top"
      scrollBehavior="outside"
      classNames={{
        wrapper: 'wrapper',
      }}
      className="m-0 !rounded-none sm:!mt-4 md:!rounded-lg"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: 'easeOut',
            },
          },
          exit: {
            y: 100,
            opacity: 0,
            transition: {
              duration: 1,
              ease: 'easeIn',
            },
          },
        },
      }}
    >
      <ModalContent className="border-large border-slate-400">
        <ModalBody className="flex-row">{children}</ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}

Layout.Sidebar = Sidebar
Layout.Content = Content

export default Layout
