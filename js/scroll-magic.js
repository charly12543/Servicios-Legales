let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({ triggerElement: ".commission ", duration: 500})
            .setTween(".commission .banner-textos", 0.5, { className: "+=extender" })
            .addTo(controller);

let scene2 = new ScrollMagic.Scene({ triggerElement: ".commission ", duration: 500})
            .setTween(".commission .logo", 1, { className: "+=extender" })
            .addTo(controller);