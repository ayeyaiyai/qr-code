import '../styles/QRCode.css';
import QRCodeImage from '../images/image-qr-code.png';

function QRCode() {
    return(
        <div className='qr-code-body'>
            <div className='qr-image'>
                <img src={QRCodeImage} alt='QR Code' className='qr-code-image' />
            </div>
            <div className='qr-body'>
                <div className='qr-title'>Improve your front-end skills by building projects</div>
                <div className='qr-description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
            </div>
        </div>
    )
}

export default QRCode;