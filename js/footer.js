class Footer extends HTMLElement {


    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="contacto">
                <div class="d-flex justify-content-between flex-column flex-md-row">
                    <div class="d-flex flex-column flex-md-row">
                        <div class="align-self-start align-self-md-center">
                            <img src="img/logo-footer2.png" alt="Logo" class="me-4 logo-footer"
                            style="border-radius: 10% / 50%;">
                        </div>
                        <div class="text-white mt-5 mt-md-0">
                            <p class="m-0 footer-ph-1">Contacto</p>
                            <p class="m-0 mt-4 mt-md-0" style="font-size:15px">33 2733 2432 </p>
                            <p class="m-0" style="font-size:15px">dominius724@gmail.com</p>
                        </div>
                    </div>

                    <div class="links mt-5 mt-md-0" style="font-size:15px" style="display:flex;flex-wrap: wrap;">

                        <a href="https://api.whatsapp.com/send?phone=3327332432&text=Hola, Necesito mas informacion!" target="_blank" rel="noopener noreferrer"
                         class="me-4 mt-3 mt-md-0 text-decoration-none text-white d-block d-md-inline-block">
                         <button type="button"> Whatsapp:
                         <i class="bi bi-whatsapp"></i>
                        </button> </a>


                        <a  href="tel:3327332432"
                        class="me-4 mt-3 mt-md-0 text-decoration-none text-white d-block d-md-inline-block">
                        <button type="button">Llamanos:
                        <i class="bi bi-telephone-forward-fill"></i>
                        </button></a>

                        <a  href="mailto:dominius724@gmail.com"
                        class="me-4 mt-3 mt-md-0 text-decoration-none text-white d-block d-md-inline-block">
                        <button type="button">Correo :
                        <i class="bi bi-envelope-at-fill"></i>
                        </button></a>
                       
                       
                       
                    </div>   
                    
                 
                  
                    
                </div>
                   
            </div> 
        </footer>
        `;
    }
}

window.customElements.define("tr-footer", Footer);