const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrolleft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scroll
Top;
   if( c > 0){
     window.requestAnimationFrame(scrollToTop);
     window.scrollTo(0, c - c / 8);
   }
};

scrollToTop();