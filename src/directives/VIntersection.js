export default {
    name: 'intersection',
    mounted(element, binding) {
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let observer = new IntersectionObserver((entries, observer) => { // eslint-disable-line no-unused-vars
            if (entries[0].isIntersecting){
                binding.value;
            }
        }, options);
        observer.observe(element);
    }
}