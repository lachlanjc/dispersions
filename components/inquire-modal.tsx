import Modal from 'react-modal'
import defaultTheme from '@/lib/theme'
import { IconButton } from 'theme-ui'
import { Cross } from '@/components/icons'
import InquireForm from '@/components/inquire-form'

Modal.setAppElement('#__next')

const theme = JSON.parse(JSON.stringify(defaultTheme))

const InquireModal = ({
  open,
  onClose,
  work,
  ...props
}: {
  open: boolean
  onClose: () => void
  work: Artwork
}) => (
  <Modal
    isOpen={open}
    contentLabel={work.title}
    onRequestClose={onClose}
    shouldCloseOnOverlayClick
    shouldCloseOnEsc
    shouldFocusAfterRender
  >
    <IconButton
      color="text"
      title="Close modal"
      onClick={onClose}
      sx={{
        p: 3,
        color: 'secondary',
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      <Cross width={24} height={24} />
    </IconButton>
    <InquireForm work={work} {...props} />
    <style>{`
      .ReactModal__Overlay {
        background-color: rgba(255, 255, 255, 0.375) !important;
        display: flex;
        justify-content: center;
        align-items: end;
      }

      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        .ReactModal__Overlay {
          background-color: rgba(180, 180, 180, 0.25) !important;
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(12px);
        }
      }

      @keyframes modal-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .ReactModal__Content {
        background-color: #fff !important;
        width: 100% !important;
        max-width: ${theme.sizes.copy}px !important;
        overflow: auto !important;
        position: relative !important;
        padding: ${theme.space[3]} !important;
        border: 0 !important;
        border-radius: 0 !important;
        max-height: calc(80vh) !important;
        transform: translateY(-50%);
        top: 50% !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        animation: modal-fade ease-in-out 0.25s;
      }
      @media (min-width: ${theme.breakpoints[1]}) {
        .ReactModal__Content {
          padding: ${theme.space[5]} !important;
        }
      }
    `}</style>
  </Modal>
)

export default InquireModal
