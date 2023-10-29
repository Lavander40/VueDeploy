export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        close(){
            this.$emit('update:show', false)
        }
    },
}