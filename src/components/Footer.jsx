import React from "react";

function Footer() {
    return (
        <div className="foot">
            <img className="footimg1" src="images/background.png" />
            <img className="footimg2" src="images/Group 1245.png" />
            <h2 className="foottxt1">global</h2>
            <p className="foottxt2">Success systems</p>
            <p className="foottxt3">orem Ipsum is simply dummy
                text of the printing and
                typesetting industry. Lore</p>
            <div className="foottb">
                <table className="foottable">
                    <div>
                        <tr>
                            <td>About Us</td>
                        </tr>
                    </div>

                    <div className="foottb2">
                        <tr>
                            <td>Company</td>
                        </tr>
                        <tr>
                            <td>Our Team</td>
                        </tr>
                        <tr>
                            <td>Our Patners</td>
                        </tr>
                        <tr>
                            <td>Our Customers</td>
                        </tr>
                        <tr>
                            <td>Careers</td>
                        </tr>
                        <tr>
                            <td>Contact us</td>
                        </tr>
                    </div>
                </table>
                <table className="foottable1">
                    <div>
                        <tr>
                            <td>Quick links</td>
                        </tr>
                    </div>

                    <div className="foottb2">
                        <tr>
                            <td>Web store</td>
                        </tr>
                        <tr>
                            <td>Privacy policy</td>
                        </tr>
                        <tr>
                            <td>Trademarks & Copyrights</td>
                        </tr>
                        <tr>
                            <td>Complaints & Appeal</td>
                        </tr>
                        <tr>
                            <td>Careers</td>
                        </tr>
                        <tr>
                            <td>Sitemap</td>
                        </tr>
                    </div>
                </table>
                <table className="foottable2">
                    <div className="fttb">
                        <tr>
                            <td>Subscribe to our newsletter</td>
                        </tr>
                    </div>

                    <div className="foottb3">
                        <tr><input className="footip" type="email" value="Your email" /></tr>
                        <tr><button className="footbtn" >Subscribe</button></tr>
                        <tr className="foottxt4">Follow us on</tr>
                        <img className="footicons" src="images/Social icons (1).png" />
                    </div>
                </table>
                <hr
                    style={{
                        background: "white",
                        height: "5px",
                        border: "none",
                    }}
                />
                <div className="foothr"></div>
                <h3 className="foottxt5">©2022 All Rights reserved by Global Success Systems.</h3>
            </div >

        </div >
    );
}

export default Footer;