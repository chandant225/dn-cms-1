import React, { useState } from 'react'

const NoticeModal = () => {
    const [showModal, setshowMoadal] = useState(true);
    const closeModal = () => {
        setshowMoadal(false)
    }
    return (

        <div className={showModal ? "modal-wrapper" : "hide-modal-wrapper"}>
            <div className="container">
                <div style={{ position: "relative", margin: "auto", width: "66%", zIndex: "999", top: "117px", background: "white" }} className="modal-case">
                    <center>
                        <p style={{ fontSize: "3rem" }}>Notice</p>
                        <div className="img-wrapper">
                            <img style={{ width: "100%", height: "300px", objectFit: "cover" }} src="https://images.unsplash.com/photo-1620354424755-f28e2a752c0e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="bdhbhw" />
                        </div>
                        <div style={{ background: "white", height: "100%" }} className="card">
                            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, quibusdam.</h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                                </p>
                            <p>
                                Lorem ipsumdignissimos voluptatibus doloremque ea culpa alias molestias quaerat magnam aspernatur! Debitis dolorum provident placeat enim nisi, porro repellendus molestias suscipit perferendis tempore mollitia, a, ipsa doloribus eligendi at alias fugiat sint dolor natus laborum quibusdam dolorem dignissimos. Soluta magnam adipisci error suscipit possimus eligendi voluptate et quaerat sint illo porro earum, commodi pariatur delectus vel, magni eaque voluptatem laborum officia dicta officiis obcaecati nihil laudantium. A eum porro repellat ex aperiam aliquam unde. Neque laborum ipsam fugit sed aliquam explicabo debitis molestiae porro, quis fuga atque doloribus error, totam, quae ratione? Ipsam tempore cumque quisquam magnam nobis ex laborum ad error et quam illo amet quia aut, quas perspiciatis! Blanditiis odio, consectetur sint eligendi facilis fugiat deleniti rem voluptatum, dolore adipisci nostrum. Inventore commodi vel itaque excepturi eaque odit, earum amet optio.
                                </p>
                        </div>
                    </center>
                    <button style={{ position: "absolute", top: "0", right: "0" }} onClick={() => {
                        closeModal();
                    }} className="btn btn-danger"><i class="far fa-times-circle"></i></button>
                </div>
            </div>

        </div>
    )
}

export default NoticeModal
