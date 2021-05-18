import React from 'react'

export default function Footer() {
    return (
        <footer>
            <hr/>
             <div class="container-sm d-flex flex-column align-items-center justify-content-center">
                <div class="top d-flex flex-sm-row flex-column">
                  <div class="right d-flex flex-column align-items-center justify-content-center mx-5">
                      <div class="title">
                        <h5>Address</h5>
                        <span></span>
                      </div>
                      <h5>Tapos, Depok</h5>
                  </div>
                  <div class="left d-flex flex-column align-items-center justify-content-center mx-5 my-5">
                      <div class="title">
                        <h5>Social Media</h5>
                      </div>
                      <div class="icon d-flex ">
                        <a href="https://www.linkedin.com/in/ezra-senaputra-9ba7aa182/" class="fa fa-linkedin"></a>
                        <a href="https://www.instagram.com/putzras/" class="fa fa-instagram"></a>
                        <a href="https://www.youtube.com/channel/UCFRYXWdyrZfbVgACnyX4PLg" class="fa fa-youtube"></a>
                      </div>
                  </div>
                </div>

                <div class="bottom">
                  <hr></hr>
                  <h5 class="text-light text-center">&copy; Copyright 2021 Ezra Senaputra</h5>
                </div>
              </div>
        </footer>
    )
}
