class Navbar extends HTMLElement {

    constructor() {
        super();
        this.item;
    }


    static get observedAttributes(){
        return ['item'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
            this.item = newValue;
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar--height bg-orange fixed-top" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="img/logo2.png" alt="Logo" width="172" height="60" style="border-radius: 10% / 50%;">
                </a>
                <a class="nav-link no-hover btn-open-account d-block d-md-none me-4 ms-auto" href="formulario.html">Obten una Asesoria</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

               
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav font-weight-bold ms-auto">
                        <div class="d-block d-md-none offcanvas-header my-3 d-flex justify-content-between px-0">
                           <div class="label-menu-mobile">
                               Menu
                           </div>
                           <div>
                               <a href="#" class="text-decoration-none text-white btn-equis-close">
                              
                           </div>
                        </div>

                        <li class="d-block d-md-none nav-item me-3 py-3 py-lg-0"><a class="nav-link text-white ${this.item == 'home' ? 'active' : '' } "
                                href="index.html">Home</a></li>
    
                        <li class="nav-item dropdown py-3 d-none d-md-block desktop-dropdown py-lg-0 me-3">
                            <a class="nav-link dropdown-toggle text-white " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nuestros Servicios
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li class="list-drop"><a class="dropdown-item py-3 ps-4 ${this.item == 'tarjeta' ? 'active' : '' }" href="servicios.html">MAQUILA DE NOMINA</a></li>
                                <li class="list-drop"><a class="dropdown-item py-3 ps-4  ${this.item == 'transferencia' ? 'active' : '' }" href="consultoria.html">CONSULTORIA CONTABLE Y FISCAL</a></li>
                                <li class="list-drop"><a class="dropdown-item py-3 ps-4 ${this.item == 'servicios' ? 'active' : '' }"  href="asesoria.html">ASESORIA JURIDICA CORPORATIVA
                                <li class="list-drop"><a class="dropdown-item py-3 ps-4 d-none" href="#!">Servicios Legales</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown py-3 d-block d-md-none mobile-dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nuestros Servicios
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li class="list-drop"><a class="dropdown-item py-3 ${this.item == 'tarjeta' ? 'active' : '' }" href="servicios.html">MAQUILA DE NOMINA</a></li>
                                <li class="list-drop"><a class="dropdown-item py-3  ${this.item == 'transferencia' ? 'active' : '' }" href="consultoria.html">CONSULTORIA CONTABLE Y FISCAL</a></li>
                                <li class="list-drop"><a class="dropdown-item py-3 ${this.item == 'servicios' ? 'active' : '' }" href="asesoria.html">ASESORIA JURIDICA CORPORATIVA
                                </a></li>
                                <li class="list-drop"><a class="dropdown-item py-3 d-none" href="#!">Servicios Legales</a></li>
                            </ul>
                        </li>

                        <li class="nav-item me-3 py-3 py-lg-0"><a class="nav-link text-white ${this.item == 'nosotros' ? 'active' : '' } "
                            href="nosotros.html">¿Quienes Somos?</a></li>
                        <li class="nav-item me-3 py-3 py-lg-0 list-drop"><a class="nav-link text-white ${this.item == 'centro' ? 'active' : '' } "
                            href="contacto.html">Contacto</a></li>
                        




                        


                        
<!---------------------------------------------------------------------------------------------------------------------------------->
                        <li class="nav-item mt-4 py-lg-0 d-block d-md-none"> <a class="nav-link no-hover btn-open-account-mobile text-center text-white" href="formulario.html">Obten una Asesoria</a></li>
                    </ul>
                </div>

                <a class="nav-link no-hover btn-private-site d-none  me-3" href="#!" style="font-size:13px">Acceso a mi sitio
                    privado</a>
                <a class="nav-link no-hover btn-open-account d-none d-lg-flex" href="formulario.html" style="font-size:13px">Obten una Asesoria</a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define("tr-navbar", Navbar);