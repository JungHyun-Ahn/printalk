const popupCont = [
    {
        tit: '프린터 등록',
        desc: '바로 웹브라우저로 이동해 프린터 등록하기!',
        chat: [
            'sect5-chat-1-1.jpg',
            'sect5-chat-1-2.jpg'
        ],
        img: 'sect5-popup1.jpg'
    },
    {
        tit: 'QR',
        desc: '프린터 정보 (프린터 이메일 ID)로 <br>QR코드 만들어 스캔하면 프린터 등록완료!',
        chat: [
            'sect5-chat-2-1.jpg',
            'sect5-chat-2-2.jpg'
        ],
        img: 'sect5-popup2.jpg'
    },
    {
        tit: '서비스 이용 철회',
        desc: '안전하게 개인정보 삭제!',
        chat: [
            'sect5-chat-3-1.jpg',
            'sect5-chat-3-2.jpg',
        ],
        img: 'sect5-popup3.jpg'
    },
    {
        tit: '사진인쇄',
        desc: '채팅창에 사진을 보내기만 하면 <br>사진 출력 가능!',
        chat: [
            'sect5-chat-4-1.jpg',
            'sect5-chat-4-2.jpg'
        ],
        img: 'sect5-popup4.jpg'
    },
    {
        tit: '문서인쇄',
        desc: '웹브라우저로 연결되어 <br>문서, 이미지 자유롭게 프린트하기!',
        chat: [
            'sect5-chat-5-1.jpg',
            'sect5-chat-5-2.jpg'
        ],
        img: 'sect5-popup5.jpg'
    },
    {
        tit: 'N컷인쇄',
        desc: '다양한 N컷 포토 프레임으로 <br>사진을 더 개성 있게!',
        chat: [
            'sect5-chat-6-1.jpg',
            'sect5-chat-6-2.jpg'
        ],
        img: 'sect5-popup6.jpg'
    },
    {
        tit: '사진 출력 완료',
        desc: '',
        chat: [
            'sect5-chat-7-1.jpg',
            'sect5-chat-7-2.jpg'
        ],
        img: 'sect5-popup7.gif'
    }
];

const scrollLock = {
    lock: function() {
        const scrollY = window.scrollY;
        $("body").css({
            "position": "fixed",
            "top": `-${scrollY}px`,
            "overflow-y": "scroll",
            "width": "100%"
        }).data("scrollY", scrollY);
        $("html").css("scroll-behavior", "auto");
    },
    unlock: function() {
        const scrollY = $("body").data("scrollY") || 0;
        $("body").css({
            "position": "static",
            "top": "auto",
            "overflow-y": "visible",
            "width": "auto"
        });
        $(window).scrollTop(scrollY);

        setTimeout(() => {
            $("html").css("scroll-behavior", "smooth");
        }, 50);

    }
};


let isClicked = false;
let hasScrolled = false;
let isContinue = false;
let hasDoubleModalBtn = false;
let hasQrBtn = false;
let $width = window.innerWidth;

const guide = {
    start: function() {
        $('.phone-wrap').addClass('clicked');
        isClicked = true;
        setTimeout(() => {
            $('.popup.start').css('display', 'none');
            $('.popup.guide').css('display', 'block');
        }, 400);
    },
    checkChatScroll: function() {
        let viewHeight = $('.chat').innerHeight();
        let chatHeight = $('.chat-inner').innerHeight();
        if(viewHeight < chatHeight) {
            $('.chat').addClass('scrolled');
            hasScrolled = true;
        }
    },
    showBtn: function() {
        if(hasDoubleModalBtn) {
            $('.btn-doublepopup').css('display', 'block');
        } else {
            $('.btn-doublepopup').css('display', 'none');
        }
        if(hasQrBtn) {
            $('.btn-qr').css('display', 'block');
        } else {
            $('.btn-qr').css('display', 'none');
        }
    },
    showChat:function(idx) {
        let chatLen = popupCont[idx].chat.length;

        if(idx == 6) {
            $('.chat-inner').html('');
        }

        for(let i=0; i < chatLen; i++) {
            let chat = popupCont[idx].chat[i];
            let chatImg = `<img src="./asset/images/${chat}" alt=""></img>`;
            setTimeout(function() {
                $('.chat-inner').append(chatImg);
                setTimeout(function() {
                    if(!hasScrolled) guide.checkChatScroll();
                }, 50);
            }, 600 * (i + 1));
        };
    },
    updatePopup: function(idx) {
        let popupImg = `<img src="./asset/images/${popupCont[idx].img}" alt=""></img>`;

        guide.showChat(idx);
        $('.popup.guide').removeClass('show');
        setTimeout(function() {
            $('.popup.guide .tit').html(popupCont[idx].tit);
            $('.popup.guide .desc').html(popupCont[idx].desc);
            $('.popup.guide .popup-body .img').html(popupImg);
            guide.showBtn();
            guide.showPopup(idx);
        }, 500);
    },
    showPopup: function(idx) {
        let chatLen = popupCont[idx].chat.length;        
        setTimeout(function() {
            if($width <= 768) $('.popup-bg').addClass('show');
            $('.popup.guide').addClass('show');
            isContinue = false;
        }, 600 * (chatLen + 0.5));
    },
    resizeWidth: function() {
        if($width <= 768) {
            $('.popup.guide').removeClass('show');
        } else {
            if(isClicked) $('.popup.guide').addClass('show').css('display', 'block');
        }
        $('.popup-bg').removeClass('show');
    }
};

$(function(){
    $('#hd .menu').on('click', function() {
        $('#hd').toggleClass('gnb-open');
    });

    $('#gnb .gnb-item').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        var tgId = $(this).attr('href') ,
            goPos = $(tgId).offset().top ;

        $('#hd').removeClass('gnb-open');
        window.scrollTo({top:goPos , behavior: "smooth"}) ;
    });

    $(window).on('scroll', function(e){ 
        var sT = $(window).scrollTop() ;
        var wH = $(window).height() ; 

        if (sT > $('.sect1').offset().top) {
            $('#hd').addClass('fixed');
        } else {
            $('#hd').removeClass('fixed');
        }
    
        if ( $('.sect1').offset().top < wH ) {
            $('.gnb-item').removeClass('active');
            $('.gnb-item').eq(0).addClass('active');
        }
        for(let i = 3; i <= 6; i++) {
            if ( sT + (wH / 2) > $(`.sect${i}`).offset().top ) {
                $('.gnb-item').removeClass('active');
                $('.gnb-item').eq(i - 2).addClass('active');
            }
        }
    });
    
    $(window).resize(function() {
        $width = window.innerWidth;
        guide.resizeWidth();
    });


    // sect5
    const guideBtn = $('.phone-wrap .btn-wrap button');
    guideBtn.each(function(index) {
        $(this).on('click', function() {
            let idx = index;
            
            if($(this).hasClass('active') || isContinue) return;

            if($width <= 768) scrollLock.lock();

            isContinue = true;
            guideBtn.removeClass('active');
            $(this).addClass('active');

            if($(this).hasClass('doublepopup')) {
                hasDoubleModalBtn = true;
            } else {
                hasDoubleModalBtn = false;
            }

            if($(this).hasClass('btnqQr')) {
                hasQrBtn = true;
            } else {
                hasQrBtn = false;
            }

            if($(this).hasClass('plusBtn')) {
                $('.plusBtn').removeClass('blink');
            }

            guide.start();
            guide.updatePopup(idx);
        });
    });

    $('.btn-doublepopup').on('click', function() {
        $('.popup.double').show();
        $('.popup-bg').addClass('show');
    });
    
    $('.popup .btn-close').on('click', function() {
        if($width <= 768) scrollLock.unlock();

        if($width <= 768) {
            $('.popup').hide();
        } else {
            $(this).closest('.popup').hide();
        }
        $('.popup-bg').removeClass('show');
    });

    // sect6
    $('.srch-btn').on('click', function() {
        $('.srch-wrap').toggleClass('open');
    });
    $(".srch-bar input").on("keyup", function () {
        var searchText = $(this).val().toLowerCase();
        $('.srch-wrap').addClass('open');
        $('.menu-list .no-support').show();

        $(".menu-list ul li").each(function () {
            var itemText = $(this).text().toLowerCase();
            if (itemText.startsWith(searchText)) {
                $('.menu-list .no-support').hide();
                $(this).removeClass('hide');
            } else {
                $(this).addClass('hide');
            }
        });

        if(searchText == '' || !$(".menu-list ul li").hasClass('hide')) {
            $('.srch-wrap').removeClass('open');
        }
    });
});