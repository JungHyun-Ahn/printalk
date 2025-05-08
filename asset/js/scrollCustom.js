const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUA = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
    const isTabletUA = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/i.test(userAgent);
    const isTabletSize = window.innerWidth <= 996;
    return isMobileUA || isTabletUA || isTabletSize;
};

// sect1
const initSect01Animations = () => {
    ScrollTrigger.create({
        trigger: ".sect1",
        start: "top top",
        end: "bottom top",
        onEnter: () => $('#gnb').removeClass('hidden navy white'),
        onEnterBack: () => $('#gnb').removeClass('hidden navy white'),
    });
    $('.sect1').addClass('active');
}

// sect2
const initSect02Animations = () => {
    ScrollTrigger.create({
        trigger: ".sect2",
        start: "top top",
        end: "bottom center",
        toggleClass: { targets: "#gnb", className: "hidden" },
    });

    // sect1 cont1
    ScrollTrigger.create({
        trigger: ".sect2-cont1",
        start: "top top",
        end: "+=150%",
        pin: true,
        pintype: "fixed",
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
    });

    const sect2cont1TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2-cont1",
            start: "top top",
            end: "+=50%",
            scrub: 2,
        }
    });

    ScrollTrigger.matchMedia({
        // 997px 이상
        "(min-width: 997px)": function() {
            sect2cont1TL
            .to(".sect2-cont1 .line", {
                margin: "8px",
                width: "0",
                ease: "power2.out",
            })
            .fromTo(
                ".sect2-cont1 .name",
                { opacity: 0, display: "none", y: 20},
                { opacity: 1, display: "block", y: 0, delay: 1, duration: 1, ease: "power3.inOut"}
            );
        },
    
        // 996px 이하
        "(max-width: 996px)": function() {
            sect2cont1TL
            .to(".sect2-cont1 .line", {
                margin: "0",
                height: "0",
                ease: "power2.out",
            })
            .fromTo(
                ".sect2-cont1 .name",
                { opacity: 0, display: "none", y: 20},
                { opacity: 1, display: "block", y: 0, delay: 1, duration: 1, ease: "power3.inOut"}
            );
        }
    });
    


    ScrollTrigger.create({
        trigger: ".sect2-cont2",
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont2", className: "visible" }
    });
    const sect2cont2TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2-cont2",
            start: "top top",
            end: "+=50%",
            scrub: 2,
        }
    });
    sect2cont2TL
    .fromTo(".sect2-cont2 .txt p:nth-of-type(1)", 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: 1 }
    )
    .fromTo(".sect2-cont2 .dot span:nth-of-type(1)", 
        { opacity: 0 },
        { opacity: 1, },
        "<"
    )
    .fromTo(".sect2-cont2 .txt p:nth-of-type(2)", 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: 1 }
    )
    .fromTo(".sect2-cont2 .dot span:nth-of-type(2)", 
        { opacity: 0 },
        { opacity: 1, },
        "<"
    )
    .fromTo(".sect2-cont2 .txt p:nth-of-type(3)", 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: 1 }
    )
    .fromTo(".sect2-cont2 .dot span:nth-of-type(3)", 
        { opacity: 0 },
        { opacity: 1, },
        "<"
    );
    

    ScrollTrigger.create({
        trigger: ".sect2-cont3",
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont3", className: "visible" }
    });
    const sect2cont3TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2-cont3",
            start: "top top",
            end: "+=80%",
            scrub: 2,
        }
    });

    ScrollTrigger.matchMedia({
        // 997px 이상
        "(min-width: 997px)": function() {
            sect2cont3TL
            .fromTo(".sect2-cont3 .dot.first span", 
                { top: '-5px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .dot.second span", 
                { top: '-5px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .dot.third span", 
                { top: '-5px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .motion", 
                { rotate: 0 },
                { rotate: 30, ease: "power3.out", yoyo: true, duration: 0.5, repeat: 1 }
            )
            .to({}, {duration: 2});
        },
        // 996px 이하
        "(max-width: 996px)": function() {
            sect2cont3TL
            .fromTo(".sect2-cont3 .dot.first span", 
                { top: '0px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .dot.second span", 
                { top: '0px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .dot.third span", 
                { top: '0px' },
                { top: '5px', delay: 0.5, duration: 0.3, ease: "power3.out", yoyo: true, repeat: 1 }
            )
            .fromTo(".sect2-cont3 .motion", 
                { rotate: 0 },
                { rotate: 30, ease: "power3.out", yoyo: true, duration: 0.5, repeat: 1 }
            )
            .to({}, {duration: 2});
        }
    });
    
    
    
    ScrollTrigger.create({
        trigger: ".sect2-cont4",
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont4", className: "visible" },
        onEnter: () => $('.sect2-cont4 .motion').removeClass('act1 act2 act3 act4')
    });
    const sect2cont4TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2-cont4",
            start: "top 20%",
            end: "+=100%",
            scrub: 2,
        }
    });
    const $cont4Motion = $('.sect2-cont4 .motion');
    sect2cont4TL
    .to($cont4Motion, { duration: 1, onStart: () => $cont4Motion.attr("class", "motion act1") })
    .to(".sect2-cont4 .motion2 img", { y: '-100%', ease: "linear", }, "<")
    .to($cont4Motion, { duration: 1, onStart: () => $cont4Motion.attr("class", "motion act2") })
    .to(".sect2-cont4 .motion2 img", { y: '-60%', ease: "linear", }, "<")
    .to($cont4Motion, { duration: 1, onStart: () => $cont4Motion.attr("class", "motion act3") })
    .to(".sect2-cont4 .motion2 img", { y: '-30%', ease: "linear", }, "<")
    .to($cont4Motion, { duration: 2, onStart: () => $cont4Motion.attr("class", "motion act4") })
    .to(".sect2-cont4 .motion2 img", { y: '0%', ease: "linear", }, "<");



    ScrollTrigger.create({
        trigger: ".sect2-cont6",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont6", className: "visible" },
    });


    ScrollTrigger.create({
        trigger: ".sect2-cont7",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont7", className: "visible" },
    });


    ScrollTrigger.create({
        trigger: ".sect2-cont8",
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont8", className: "visible" },
    });


    ScrollTrigger.create({
        trigger: ".sect2-cont9",
        start: "top top",
        end: "+=350%",
        pin: true,
        pinSpacing: false,
        fastScrollEnd: true,
        preventOverlaps: true,
        toggleClass: { targets: ".sect2-cont9", className: "visible" },
    });
    const sect2cont9TL = gsap.timeline({
        scrollTrigger: {
            trigger: ".sect2-cont9",
            start: "top top",
            end: "+=250%",
            scrub: 2,
        }
    });
    const $cont9Motion = $('.sect2-cont9 .motion');
    ScrollTrigger.matchMedia({
        // 997px 이상
        "(min-width: 650px)": function() {
            sect2cont9TL
            .fromTo(".sect2-cont9 .bg", 
                { width: '20vw' },
                { width: '42vw', duration: 1 }
            )
            .fromTo(".sect2-cont9 .txt1 p", 
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, delay: 1, duration: 1 }
            )
            .to(".sect2-cont9 .bg", { width: '60.5vw', delay: 5, duration: 2 })
            .to(".sect2-cont9 .txt1 p", { opacity: 0, duration: 0.5 }, "<")
            .fromTo(".sect2-cont9 .txt2 p", 
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1 },
                "<"
            )
            .to(".sect2-cont9 .bg img", { rotate: 45, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act1") }, "<")
            .to(".sect2-cont9 .bg img", { rotate: 90, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act2") }, "<")
            .to(".sect2-cont9 .bg img", { rotate: 135, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act3") }, "<")
            .to(".sect2-cont9 .bg", { width: '150vw', delay: 5, duration: 5 })
            .to(".sect2-cont9 .bg img", { rotate: 200, duration: 5 }, "<")
            .to(".sect2-cont9 .txt2 p", { opacity: 0, duration: 0.1 }, "<")
            .to(".sect2-cont9 .logo", {opacity: 1, delay: 1 }, "<");
        },
        // 996px 이하
        "(max-width: 649px)": function() {
            sect2cont9TL
            .fromTo(".sect2-cont9 .bg", 
                { width: '30vw' },
                { width: '80vw', duration: 1 }
            )
            .fromTo(".sect2-cont9 .txt1 p", 
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, delay: 1, duration: 1 }
            )
            .to(".sect2-cont9 .bg", { width: '120vw', delay: 5, duration: 2 })
            .to(".sect2-cont9 .txt1 p", { opacity: 0, duration: 0.5 }, "<")
            .fromTo(".sect2-cont9 .txt2 p", 
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1 },
                "<"
            )
            .to(".sect2-cont9 .bg img", { rotate: 45, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act1") }, "<")
            .to(".sect2-cont9 .bg img", { rotate: 90, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act2") }, "<")
            .to(".sect2-cont9 .bg img", { rotate: 135, delay: 2, duration: 3 })
            .to($cont9Motion, { duration: 3, onStart: () => $cont9Motion.attr("class", "motion act3") }, "<")
            .to(".sect2-cont9 .bg", { width: '220vw', delay: 5, duration: 5 })
            .to(".sect2-cont9 .bg img", { rotate: 200, duration: 5 }, "<")
            .to(".sect2-cont9 .txt2 p", { opacity: 0, duration: 0.1 }, "<")
            .to(".sect2-cont9 .logo", {opacity: 1, delay: 1 }, "<");
        }
    });
}

// sect3
const initSect03Animations = () => {
    ScrollTrigger.create({
        trigger: ".sect3",
        start: "top center",
        end: "bottom center",
        onEnter: () => $('#gnb').addClass('navy'),
    });
}

// sect4
const initSect04Animations = () => {
    let intentObserver;
    let preventScroll;
    let isAnimating = false;
    let scrollTimeout;
    let scrollTriggerInstance;

    // Swiper 초기화
    const swiper = new Swiper(".age-swiper .txt-swiper", { 
        effect: "fade",
        observer: true,
        allowTouchMove: false,
        speed: 1000,
        pagination: {
            el: '.age-swiper + .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                var labels = ["10대", "20대", "30대", "40대", "50대"];
                return `<div class="${className}"><span class="label">${labels[index]}</span></div>`;
            },
        }
    });
    const agePhotoSwiper = new Swiper(".age-swiper .photo-swiper", { 
        slidesPerView: 'auto',
        observer: true,
        centeredSlides: false,
        allowTouchMove: true,
        breakpoints: {
            996: {
                allowTouchMove: false,
            }
        }
    });
    swiper.controller.control = agePhotoSwiper;
    agePhotoSwiper.controller.control = swiper;

    const numPanels = swiper.slides.length;
    let currentIndex = 0;

    // 스크롤 Lock 함수
    const lockScroll = () => {
        isAnimating = true;
        if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    
        scrollTimeout = requestAnimationFrame(() => {
            setTimeout(() => {
                isAnimating = false;
            }, 100);
        });
    };

    // PC
    if (!isMobile()) {
        let isInSection = false;
        let lastScrollTime = 0;
        const scrollThrottle = 500;

        intentObserver = ScrollTrigger.observe({
            type: "wheel,touch,pointer",
            onUp: () => {
                const now = Date.now();
                if (now - lastScrollTime > scrollThrottle && isInSection && !isAnimating) {
                    lastScrollTime = now;
                    if (currentIndex < numPanels - 1) {
                        lockScroll();
                        swiper.slideNext();
                    } else {
                        // 마지막 슬라이드에서 다음 섹션으로
                        intentObserver.disable();
                        preventScroll.disable();
                        gsap.to(window, {
                            duration: 0.1,
                            scrollTo: window.scrollY + window.innerHeight,
                            ease: "power2.inOut",
                        });
                    }
                }
            },
            onDown: () => {
                const now = Date.now();
                if (now - lastScrollTime > scrollThrottle && isInSection && !isAnimating) {
                    lastScrollTime = now;
                    if (currentIndex > 0) {
                        lockScroll();
                        swiper.slidePrev();
                    } else {
                        // 첫 번째 슬라이드에서 이전 섹션으로
                        intentObserver.disable();
                        preventScroll.disable();
                        gsap.to(window, {
                            duration: 0.1,
                            scrollTo: window.scrollY - window.innerHeight,
                            ease: "power2.inOut",
                        });
                    }
                }
            },
            wheelSpeed: -1,
            tolerance: 10,
            preventDefault: true,
        });
        intentObserver.disable();

        preventScroll = ScrollTrigger.observe({
            preventDefault: true,
            type: "wheel,scroll,touch,pointer",
            onEnable: (self) => {
                self.savedScroll = self.scrollY();
                isInSection = true;
            },
            onDisable: () => {
                isInSection = false;
            },
            onChangeY: (self) => {
                if (!isAnimating && isInSection) {
                    self.scrollY(self.savedScroll);
                }
            },
            onComplete: () => {
                isAnimating = false;
            }
        });
        preventScroll.disable();

        // ScrollTrigger 설정 수정
        scrollTriggerInstance = ScrollTrigger.create({
            trigger: ".sect4",
            pin: true,
            pinSpacing: true,
            start: "top top",
            scrub: 1,
            end: "+=110%",
            onEnter: () => {
                lockScroll();
                isInSection = true;
                preventScroll.enable();
                intentObserver.enable();
            },
            onLeave: () => {
                isInSection = false;
                intentObserver.disable();
                preventScroll.disable();
            },
            onEnterBack: () => {
                lockScroll();
                isInSection = true;
                preventScroll.enable();
                intentObserver.enable();
            },
            onLeaveBack: () => {
                isInSection = false;
                intentObserver.disable();
                preventScroll.disable();
            },
        });

        $(".gnb-item").on("click", function() {
            isAnimating = false;
            preventScroll.disable();
            intentObserver.disable();
        });
    }

    // 슬라이드 변경 이벤트
    swiper.on("slideChange", function () {
        currentIndex = swiper.activeIndex;
    });

    // 초기 설정
    ScrollTrigger.config({
        ignoreMobileResize: true,
    });
};

// sect5
const initSect05Animations = () => {
    ScrollTrigger.create({
        trigger: ".sect5",
        start: "top top",
        end: "bottom top",
        onEnter: () => $('#gnb').addClass('navy'),
        onEnterBack: () => $('#gnb').addClass('navy'),
    });
}

// sect6
const initSect06Animations = () => {
    ScrollTrigger.create({
        trigger: ".sect6",
        start: "top 10%",
        end: "bottom top",
        toggleClass: { targets: "#gnb", className: "white" },
        onEnter: () => $('#gnb').removeClass('navy'),
        onEnterBack: () => $('#hd').removeClass('hidden'),
        onLeave: () => $('#hd').addClass('hidden'),
    });

    // 텍스트 무한롤링
    let $wrapper = $(".txt-rolling");
    let $marquee = $(".txt-rolling p");
    let width = $marquee.width();
    $marquee.clone().appendTo($wrapper);
    $wrapper.css({ width: width * 2 });

    function animate() {
        $wrapper.css({ left: 0 }).animate(
            { left: -width },
            25000,
            "linear",
            animate
        );
    }

    animate();
}


const initGSAP = () => {
    gsap.registerPlugin(ScrollTrigger);

    initSect01Animations();
    initSect02Animations();
    initSect03Animations();
    initSect04Animations();
    initSect05Animations();
    initSect06Animations();
};

// 페이지 초기 상태 설정 함수
const initializePageState = () => {
    window.scrollTo(0, 0);
    $('.sect1').removeClass('active');
    $('#gnb').removeClass('hidden navy white');
};

$(function(){
    initializePageState();
    setTimeout(() => {
        initGSAP();
    }, 100);
});
