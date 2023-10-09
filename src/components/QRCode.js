import '../styles/QRCode.css';
import QRCodeImage from '../images/image-qr-code.png';

function QRCode() {
    return(
        <div className='qr-code-body'>
            <div className='qr-image'>
                <img src={QRCodeImage} alt='QR Code' className='qr-code-image' />
            </div>
        </div>
    )
}

export default QRCode;