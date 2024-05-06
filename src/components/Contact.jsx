const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="column">
                    <div className="contact-title">
                        <h1>Lorraine Penchion</h1>
                        <h3>Watercolour Artist located in Altrincham, UK</h3>
                    </div>
                    <h4>Reach out to me for all your enquiries regarding sales and commissions!</h4>
                    <br />
                    <button>EMAIL ME</button>
                    <p>T: +44(0)1234 567890</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/lorrainepenchionart/" target="blank"><i class="fa fa-instagram"></i></a>
                        <i class="fa fa-facebook-f"></i>
                    </div>
                </div>
                <div className="column">
                    <img src="../src/images/40B6CF4E-EBD9-47DC-8E72-29A1A0B65A25.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact