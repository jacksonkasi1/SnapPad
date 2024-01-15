import * as Icon from 'react-feather'

export const DraggableTopBar = () => {
    const handleClose = () => window.electron.closeWindow()
    const handleMinimize = () => window.electron.minimizeWindow()
    const handleMaximize = () => window.electron.maximizeWindow()

    return (
        <header className="draggable-top-bar">
            <button className="window-control-btn minimize-btn" onClick={handleMinimize}>
                <Icon.Minus className="window-icon" />
            </button>
            <button className="window-control-btn maximize-btn" onClick={handleMaximize}>
                <Icon.Maximize className="window-icon" />
            </button>
            <button className="window-control-btn close-btn" onClick={handleClose}>
                <Icon.X className="window-icon" />
            </button>
        </header>
    )
}
